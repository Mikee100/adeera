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
  hello: "Hello! I'm ADEERA's AI assistant. I can help you with information about our services, pricing, support, and more. How can I assist you today?",
  hi: "Hi there! Welcome to ADEERA. I'm here to help you explore our enterprise SaaS solutions. What would you like to know?",
  pricing: "Our pricing is flexible and based on your specific needs. We offer:\n• CRM Integration: Starting at $299/month\n• Cybersecurity: Starting at $499/month\n• Cloud Solutions: Starting at $199/month\n• SaaS Marketplace: Starting at $99/month\n\nWould you like me to connect you with our sales team for a custom quote?",
  support: "Our support team is available 24/7 across multiple channels:\n• Live Chat (current)\n• Email: support@adeera.co.ke\n• Phone: +254 700 000 000\n• WhatsApp: +254 700 000 000\n\nWhat specific issue are you experiencing?",
  services: "We offer comprehensive enterprise SaaS solutions:\n\n🔹 **CRM Integration**\nSalesforce, HubSpot, Zoho with local customization\n\n🔹 **Cybersecurity**\nEndpoint protection, threat intelligence, compliance\n\n🔹 **Cloud Solutions**\nAWS, Azure, Google Cloud migrations\n\n🔹 **SaaS Marketplace**\nCurated HR, accounting, e-commerce tools\n\nWhich service interests you most?",
  contact: "You can reach us through multiple channels:\n\n📞 **Phone**: +254 700 000 000\n📧 **Email**: hello@adeera.co.ke\n📍 **Office**: Nairobi, Kenya\n🌐 **Website**: adeera.co.ke\n\nOur team responds within 2 hours during business hours.",
  demo: "Great! I can help you schedule a demo. We offer:\n• 30-minute overview demo\n• 60-minute detailed walkthrough\n• Custom demo for specific use cases\n\nWhat type of demo would you prefer? I'll connect you with our demo team.",
  thank: "You're very welcome! 😊 I'm here to help make your digital transformation journey smooth. Is there anything else you'd like to know about ADEERA?",
  thanks: "You're very welcome! 😊 I'm here to help make your digital transformation journey smooth. Is there anything else you'd like to know about ADEERA?",
  bye: "Thank you for chatting with ADEERA! Have a wonderful day. Feel free to return anytime - I'm here 24/7 to help! 👋",
  goodbye: "Thank you for chatting with ADEERA! Have a wonderful day. Feel free to return anytime - I'm here 24/7 to help! 👋",
  ai: "Yes, I'm an AI assistant powered by advanced language models! I can help with:\n• Service information\n• Pricing queries\n• Support requests\n• Demo scheduling\n• General questions\n\nI'm constantly learning and improving to serve you better! 🤖✨",
  artificial: "Yes, I'm an AI assistant powered by advanced language models! I can help with:\n• Service information\n• Pricing queries\n• Support requests\n• Demo scheduling\n• General questions\n\nI'm constantly learning and improving to serve you better! 🤖✨",
  help: "I'm here to help! I can assist with:\n\n📋 **Information**: Services, pricing, features\n🎯 **Support**: Technical issues, account help\n📅 **Demos**: Schedule product demonstrations\n📞 **Contact**: Connect you with our team\n\nWhat do you need help with?",
  features: "Here are our key features:\n\n🚀 **Rapid Deployment**: 5x faster than traditional solutions\n🔒 **Enterprise Security**: Bank-grade protection\n🌍 **Local Expertise**: African market specialization\n📊 **Analytics**: Real-time insights and reporting\n🔧 **Customization**: Tailored to your business needs\n\nWhich feature would you like to learn more about?",
  security: "Security is our top priority! We offer:\n\n🔐 **ISO 27001 Certified**\n🛡️ **SOC 2 Compliance**\n🔒 **End-to-end encryption**\n🛡️ **24/7 threat monitoring**\n📋 **GDPR compliance**\n\nYour data is protected with enterprise-grade security protocols.",
  cloud: "Our cloud solutions include:\n\n☁️ **Multi-cloud strategy**: AWS, Azure, Google Cloud\n⚡ **Edge computing**: Local data processing\n🔄 **Migration services**: Seamless transitions\n📈 **Scalability**: Grow with confidence\n💰 **Cost optimization**: Reduce cloud spend\n\nReady to start your cloud journey?",
  crm: "Our CRM integration services:\n\n📊 **Salesforce**: Custom deployments\n🎯 **HubSpot**: Marketing automation\n📈 **Zoho**: Complete business suite\n🔗 **API Integration**: Seamless connections\n📱 **Mobile access**: Work anywhere\n\nWhich CRM platform are you using?",
};

const QUICK_REPLIES: QuickReply[] = [
  { id: '1', text: 'Tell me about pricing', category: 'pricing' },
  { id: '2', text: 'I need support', category: 'support' },
  { id: '3', text: 'Schedule a demo', category: 'demo' },
  { id: '4', text: 'What services do you offer?', category: 'services' },
  { id: '5', text: 'Contact information', category: 'contact' },
  { id: '6', text: 'Security features', category: 'security' },
];

const getAIResponse = (message: string): string => {
  const lower = message.toLowerCase();
  
  // Check for exact matches first
  for (const key in AI_RESPONSES) {
    if (lower.includes(key)) {
      return AI_RESPONSES[key];
    }
  }
  
  // Check for partial matches and context
  if (lower.includes('cost') || lower.includes('price') || lower.includes('money')) {
    return AI_RESPONSES.pricing;
  }
  
  if (lower.includes('problem') || lower.includes('issue') || lower.includes('error')) {
    return AI_RESPONSES.support;
  }
  
  if (lower.includes('show') || lower.includes('see') || lower.includes('demo')) {
    return AI_RESPONSES.demo;
  }
  
  // Default response
  return "I understand you're asking about something specific. Let me help you better - could you provide more details about what you're looking for? I can assist with pricing, services, support, demos, or general information about ADEERA.";
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
