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
  hello: "Hello! I'm ADEERA's assistant. I can help you with the ADEERA Platform — POS, inventory, sales, reports, M-Pesa, and AI. What would you like to know?",
  hi: "Hi! Welcome to ADEERA. We build one platform for POS, inventory, sales, and insights. Ask me about features, pricing, a demo, or logging in.",
  pricing: "We have three plans:\n\n• **Basic** — Core POS, inventory, sales. Great for getting started.\n• **Pro** — More products, users, branches; full reports, AI, M-Pesa.\n• **Enterprise** — Scale without limits, dedicated support.\n\nVisit our Pricing page or contact us for details. You can also start a free trial.",
  support: "We're here to help:\n\n• **Email**: adeeraunitech@gmail.com\n• **Phone**: +254 700 000 000\n• **Website**: adeeraunitech.com\n\nFor app access, use the **Log in** link in the header. What do you need help with?",
  platform: "The ADEERA Platform is one system for your business:\n\n🛒 **POS** — Fast checkout, cash, M-Pesa, credit, receipts\n📦 **Inventory** — Products, suppliers, 11+ reports\n📊 **Reports & Analytics** — Dashboard, trends, sales targets\n🤖 **AI Assistant** — Ask questions, get charts\n💳 **M-Pesa & Billing** — Accept mobile money, Stripe subscriptions\n\nWant a demo or to see a specific feature?",
  services: "The ADEERA Platform includes:\n\n🛒 **Point of Sale** — Cart, checkout, receipts, multi-branch\n📦 **Inventory & Products** — Stock, suppliers, low-stock alerts, valuation\n📊 **Analytics & AI** — Dashboard, reports, in-app AI assistant\n💳 **Payments** — M-Pesa, Stripe, invoices\n🏢 **Multi-branch** — Users, permissions, one login\n\nCheck the Features or Platform page for the full list.",
  contact: "Reach us at:\n\n📞 **Phone**: +254 700 000 000\n📧 **Email**: adeeraunitech@gmail.com\n📍 **Nairobi, Kenya**\n🌐 **adeeraunitech.com**\n\nUse **Log in** in the menu to access the app. We respond within 24 hours.",
  demo: "You can:\n\n• **Book a demo** — Fill the form on our Demo page; we’ll get back to you.\n• **Start a free trial** — Use the **Get Started** or **Log in** link to sign up.\n\nTell me if you want a walkthrough or to try it yourself.",
  thank: "You're welcome! 😊 Need more on the platform, pricing, or demo? Just ask.",
  thanks: "You're welcome! 😊 Need more on the platform, pricing, or demo? Just ask.",
  bye: "Thanks for chatting! For the app, use **Log in** in the header. Come back anytime! 👋",
  goodbye: "Thanks for chatting! For the app, use **Log in** in the header. Come back anytime! 👋",
  ai: "I'm here to help with the ADEERA Platform: POS, inventory, reports, M-Pesa, AI, pricing, demos, and how to log in. What would you like to know?",
  artificial: "I'm here to help with the ADEERA Platform: POS, inventory, reports, M-Pesa, AI, pricing, demos, and how to log in. What would you like to know?",
  help: "I can help with:\n\n📋 **Platform & features** — POS, inventory, reports, AI, M-Pesa\n💰 **Pricing** — Basic, Pro, Enterprise\n📅 **Demo or trial** — Book a demo or start free trial\n🔐 **Log in** — Use the **Log in** link in the header to open the app\n📞 **Contact** — Email, phone, website\n\nWhat do you need?",
  features: "Key features of the ADEERA Platform:\n\n🛒 **POS** — Fast sales, cart, receipts, cash/M-Pesa/credit\n📦 **Inventory** — Products, suppliers, 11+ reports (e.g. low stock, valuation)\n📊 **Dashboard & AI** — Revenue, trends, and an in-app AI that can generate charts\n💳 **M-Pesa** — Accept and reconcile mobile money\n🏢 **Multi-branch** — Multiple locations, users, permissions\n\nSee the Features page for the full list.",
  login: "To open the ADEERA app, click **Log in** in the top-right of this website. That takes you to the platform where you can sign in or start a free trial. If you don’t see it, go to the main menu — it’s there on desktop and mobile.",
  signin: "To open the ADEERA app, click **Log in** in the top-right of this website. That takes you to the platform where you can sign in or start a free trial.",
  mpesa: "M-Pesa is built into the ADEERA Platform:\n\n• Accept **M-Pesa** at checkout when you make a sale\n• View **M-Pesa transactions** in the app and reconcile with sales\n• One place for cash, M-Pesa, and credit\n\nPerfect for retail and shops in Kenya. Want a demo?",
  pos: "Our Point of Sale lets you:\n\n• Search products, add to cart, use variations\n• Pay with **cash**, **M-Pesa**, or **credit**\n• Print or view **receipts**\n• See **sales history** and use **multi-branch**\n\nCheck the POS page for details or book a demo.",
  trial: "You can start a **free trial** by clicking **Log in** or **Get Started** in the header — that goes to the app where you can sign up. Or fill the form on the **Demo** page and we’ll set you up. No credit card required.",
  security: "We take security seriously:\n\n🔒 **Multi-tenant** — Your data is isolated\n👥 **Role-based permissions** — Control who sees what\n🛡️ **Secure hosting** — Your business data is protected\n\nNeed more details? Ask about the platform or contact us.",
  crm: "We focus on the **ADEERA Platform** — POS, inventory, sales, M-Pesa, reports, and AI. CRM integrations are on our roadmap for later. Right now you get one system for checkout, stock, and insights. Want a demo of what we offer today?",
  cybersecurity: "We focus on the **ADEERA Platform** — POS, inventory, sales, M-Pesa, reports, and AI. Your data is secure with multi-tenant isolation and role-based permissions. Cybersecurity add-ons are on our roadmap. Want to see the platform features?",
  cloud: "The ADEERA Platform runs in the cloud — access your POS, inventory, and reports from anywhere. One login for multi-branch, M-Pesa, and AI insights. Want a demo or to start a free trial?",
  marketplace: "We focus on the **ADEERA Platform** — POS, inventory, sales, M-Pesa, reports, and AI. A SaaS marketplace is on our roadmap. Right now you get one integrated system for your business. Check our Features or Pricing page.",
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
  return "I can help with the ADEERA Platform — pricing, features (POS, inventory, reports, M-Pesa, AI), demos, or how to log in. What would you like to know?";
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
    setTimeout(() => {
      setIsTyping(false);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: getAIResponse(userMessage.text),
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
    }, 2000 + Math.random() * 1000);
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
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: getAIResponse(reply.text),
        sender: 'ai',
        timestamp: new Date(),
        isAI: true
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 2000);
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
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
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
                      className={`rounded-lg p-3 ${
                        message.sender === 'user'
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
