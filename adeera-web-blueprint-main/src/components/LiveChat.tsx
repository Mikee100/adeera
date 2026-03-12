import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X, Send, Bot, User, Clock, Check, CheckCheck, Mic, Paperclip, Smile, MoreVertical } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai' | 'support' | 'typing';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  isAI?: boolean;
}

interface QuickReply {
  id: string;
  text: string;
  category: string;
}

const AI_RESPONSES: { [key: string]: string } = {
  hello: "Hey there! 👋 I'm the ADEERA assistant. I can help you navigate our platform—from POS and inventory all the way to M-Pesa integration and AI reporting. What's on your mind today?",
  hi: "Hi! Welcome to ADEERA. 🚀 We're building one unified platform for POS, inventory, sales, and analytics. Looking for info on our features, pricing, or maybe a quick demo?",
  pricing: "We've got three main plans depending on where you're at:\n\n• **Basic** — Great to get started with core POS & inventory.\n• **Pro** — Perfect for scaling with advanced reports, M-Pesa, and AI insights.\n• **Enterprise** — For large operations needing dedicated support.\n\nYou can always check our Pricing page for the fine details, or start a free trial to see for yourself!",
  support: "We're always here to help out! 🙌\n\nYou can shoot us an email at adeeraunitech@gmail.com, or give us a call at +254 700 000 000. If you just need to jump into the app, hit the **Log in** button at the top.",
  platform: "The ADEERA Platform is designed to be your all-in-one business hub:\n\n🛒 **POS** — Super fast checkout (Cash, M-Pesa, Credit)\n📦 **Inventory** — Easy stock management and tracking\n📊 **Insights** — Live dashboards and AI charting\n💳 **Payments** — Seamless M-Pesa and Stripe billing\n\nWould you like a demo to see it in action?",
  services: "Our platform covers all the bases for a growing business: Lightning-fast POS, smart inventory alerts, an AI assistant for deep analytics, and built-in M-Pesa payments. Check out the Features page if you want the full deep dive!",
  contact: "We'd love to chat! 📞 You can reach us at +254 700 000 000 or email adeeraunitech@gmail.com. We're based right here in Nairobi, Kenya. We usually get back within 24 hours!",
  demo: "I'd love to show you around! 🎉 \n\nYou can either fill out the quick form on our Demo page, or just dive right in with a free trial by clicking **Get Started** at the top. Which sounds better to you?",
  thank: "You're so welcome! 😊 Let me know if anything else comes up.",
  thanks: "Anytime! 😊 I'm right here if you need more help with the platform.",
  bye: "Catch you later! 👋 Don't forget you can always click **Log in** at the top whenever you're ready to jump into the app. Have a great day!",
  goodbye: "Catch you later! 👋 Don't forget you can always click **Log in** at the top whenever you're ready to jump into the app. Have a great day!",
  ai: "I'm the ADEERA AI! I'm here to help you understand our platform, find the right pricing, or figure out how to get started. How can I help you today?",
  artificial: "I'm the ADEERA AI! I'm here to help you understand our platform, find the right pricing, or figure out how to get started. How can I help you today?",
  help: "I'm ready to help! I can break down our features (POS, inventory, M-Pesa), explain our pricing plans, guide you to a demo, or help you log in. What are you looking for right now?",
  features: "Our biggest superpower is bringing everything together: \n\nWe give you a fast POS system, smart inventory tracking with low-stock alerts, fully integrated M-Pesa payments, and a dashboard powered by AI to help you make sense of your sales data. Let me know if you want to explore any of these specific areas!",
  login: "Ready to get to work? Just hit the **Log in** button at the top-right of the screen. If you're on a phone, you might need to open the menu first. That'll take you straight to your dashboard!",
  signin: "Ready to get to work? Just hit the **Log in** button at the top-right of the screen. If you're on a phone, you might need to open the menu first. That'll take you straight to your dashboard!",
  mpesa: "We know how important M-Pesa is. With ADEERA, M-Pesa is completely built into the POS. You can accept payments at checkout and reconcile everything automatically alongside your cash and card sales. It's super smooth!",
  pos: "Our POS is built for speed. You can search products, manage variations, accept split payments (like cash + M-Pesa), and view full sales histories across multiple branches. Let me know if you want to book a quick demo to see it!",
  trial: "Awesome! You can jump straight into a free trial—no credit card needed. Just click **Log in** or **Get Started** at the top of the page. Or, if you prefer, we can give you a guided tour first via the Demo page.",
  security: "Your data's safety is a massive priority for us. 🔒 We use multi-tenant isolation so your data is completely walled off, and we give you granular role-based permissions so your staff only see what they need to see.",
  crm: "Right now, we are entirely focused on making the core ADEERA Platform incredible—that means world-class POS, inventory, analytics, and M-Pesa. Full CRM integrations are on the roadmap, but right now we're keeping it simple and powerful. Want a demo of the core platform?",
  cybersecurity: "Right now, we are entirely focused on making the core ADEERA Platform incredible—that means world-class POS, inventory, analytics, and M-Pesa. Your data is extremely secure, but specialized cybersecurity add-ons are on our long-term roadmap.",
  cloud: "Yep, we're 100% cloud-based! ☁️ That means you can log in and see your live sales, inventory updates, and AI reports from anywhere in the world on any device. Want to start a free trial to test it out?",
  marketplace: "Currently we're focused laser-sharp on the merchant side—giving you the best POS, inventory, and M-Pesa tools. A SaaS marketplace is something we're exploring for the future though!",
};

const QUICK_REPLIES: QuickReply[] = [
  { id: '1', text: 'Tell me about pricing', category: 'pricing' },
  { id: '2', text: 'What is the platform?', category: 'platform' },
  { id: '3', text: 'Schedule a demo', category: 'demo' },
  { id: '4', text: 'How do I log in?', category: 'login' },
  { id: '5', text: 'Contact information', category: 'contact' },
  { id: '6', text: 'M-Pesa & payments', category: 'mpesa' },
];

const getAIResponse = (message: string): string => {
  const lower = message.toLowerCase();

  // Check legacy/off-topic terms first – redirect to platform
  if (lower.includes('crm') || lower.includes('salesforce') || lower.includes('hubspot') || lower.includes('zoho')) {
    return AI_RESPONSES.crm;
  }
  if (lower.includes('cybersecurity') || lower.includes('cyber security')) {
    return AI_RESPONSES.cybersecurity;
  }
  if (lower.includes('cloud')) {
    return AI_RESPONSES.cloud;
  }
  if (lower.includes('marketplace') || lower.includes('market place')) {
    return AI_RESPONSES.marketplace;
  }

  // Check for exact/key matches
  for (const key in AI_RESPONSES) {
    if (lower.includes(key)) {
      return AI_RESPONSES[key];
    }
  }

  // Check for partial matches and context
  if (lower.includes('cost') || lower.includes('price') || lower.includes('money') || lower.includes('plan')) {
    return AI_RESPONSES.pricing;
  }
  if (lower.includes('login') || lower.includes('log in') || lower.includes('sign in') || lower.includes('app')) {
    return AI_RESPONSES.login;
  }
  if (lower.includes('mpesa') || lower.includes('m-pesa') || lower.includes('mobile money')) {
    return AI_RESPONSES.mpesa;
  }
  if (lower.includes('pos') || lower.includes('point of sale') || lower.includes('checkout')) {
    return AI_RESPONSES.pos;
  }
  if (lower.includes('trial') || lower.includes('free trial') || lower.includes('sign up')) {
    return AI_RESPONSES.trial;
  }
  if (lower.includes('problem') || lower.includes('issue') || lower.includes('error')) {
    return AI_RESPONSES.support;
  }
  if (lower.includes('show') || lower.includes('see') || lower.includes('demo')) {
    return AI_RESPONSES.demo;
  }
  if (lower.includes('platform') || lower.includes('feature') || lower.includes('inventory') || lower.includes('report')) {
    return AI_RESPONSES.platform;
  }
  // Default response
  return "I'm always ready to chat about the ADEERA Platform—whether you're curious about pricing, looking for a demo, or want to understand how our POS and M-Pesa work together. What's on your mind?";
};

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center space-x-2 p-3 bg-muted rounded-lg max-w-[80%]"
  >
    <div className="flex space-x-1">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        className="w-2 h-2 bg-primary rounded-full"
      />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        className="w-2 h-2 bg-primary rounded-full"
      />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        className="w-2 h-2 bg-primary rounded-full"
      />
    </div>
    <span className="text-sm text-muted-foreground">AI is typing...</span>
  </motion.div>
);

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate message sending
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === userMessage.id
            ? { ...msg, status: 'sent' as const }
            : msg
        )
      );
    }, 500);

    // Simulate AI typing and response
    const aiResponseText = getAIResponse(userMessage.text);
    // Calculate a more realistic typing delay based on response length (min 1.5s, max 3.5s)
    const typingDelay = Math.min(Math.max(aiResponseText.length * 15, 1500), 3500);

    setTimeout(() => {
      setIsTyping(false);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
        isAI: true
      };
      setMessages(prev => [...prev, aiMessage]);

      // Mark user message as read
      setTimeout(() => {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === userMessage.id
              ? { ...msg, status: 'read' as const }
              : msg
          )
        );
      }, 1000);
    }, typingDelay);
  };

  const handleQuickReply = (reply: QuickReply) => {
    const userMessage: Message = {
      id: Date.now(),
      text: reply.text,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === userMessage.id
            ? { ...msg, status: 'sent' as const }
            : msg
        )
      );
    }, 500);

    setTimeout(() => {
      setIsTyping(false);
      const aiResponseText = getAIResponse(reply.text);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
        isAI: true
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1500 + Math.random() * 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sending':
        return <Clock className="h-3 w-3" />;
      case 'sent':
        return <Check className="h-3 w-3" />;
      case 'delivered':
        return <CheckCheck className="h-3 w-3" />;
      case 'read':
        return <CheckCheck className="h-3 w-3 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-full w-12 h-12 shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-0 right-16 z-50 w-96 h-[500px] bg-background rounded-xl shadow-2xl border border-border/50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/bot-avatar.png" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm">ADEERA AI Assistant</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted/5">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Welcome to ADEERA!</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm your AI assistant. How can I help you today?
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {QUICK_REPLIES.map((reply) => (
                      <Button
                        key={reply.id}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply)}
                        className="justify-start text-left h-auto p-3"
                      >
                        {reply.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map(message => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  <div className="flex items-end space-x-2 max-w-[85%]">
                    {message.sender !== 'user' && (
                      <Avatar className="h-6 w-6 flex-shrink-0">
                        <AvatarImage src="/bot-avatar.png" />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          <Bot className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg p-3 ${message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                        }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs opacity-70">
                          {formatTime(message.timestamp)}
                        </span>
                        {message.sender === 'user' && message.status && (
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(message.status)}
                          </div>
                        )}
                      </div>
                    </div>
                    {message.sender === 'user' && (
                      <Avatar className="h-6 w-6 flex-shrink-0">
                        <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                          <User className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-background rounded-b-xl">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    disabled={isTyping}
                    className="pr-20"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Smile className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Mic className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={isTyping || !newMessage.trim()}
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Replies */}
              {messages.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {QUICK_REPLIES.slice(0, 3).map((reply) => (
                    <Button
                      key={reply.id}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs h-7 px-2"
                    >
                      {reply.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
