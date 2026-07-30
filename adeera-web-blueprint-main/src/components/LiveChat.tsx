import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  X,
  Send,
  ChevronRight,
  MessageCircle,
  BrainCircuit,
  MessageSquareMore,
  CheckCheck,
  Info
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai' | 'support' | 'typing';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  link?: { text: string; url: string; icon?: any };
}

interface QuickReply {
  id: string;
  text: string;
  category: string;
}

const AI_RESPONSES: { [key: string]: string } = {
  hello: "Habari! I can point you to the right page for POS, inventory, payments, or pricing. What are you looking for?",
  hi: "Hello! I can point you to the right page for POS, inventory, payments, or pricing. What are you looking for?",
  pos: "The Adeera POS runs as a retail till or a restaurant till, and keeps working offline. Take a look at the screenshots and video tours.",
  inventory: "Adeera syncs products, variations, and stock levels across every branch in real time.",
  payments: "Adeera accepts M-Pesa, cash, and credit at the till, with billing handled through Stripe.",
  mpesa: "M-Pesa is built into checkout — customers pay by STK push at the till.",
  ai: "There's an in-app AI assistant on the dashboard that answers questions about your sales data and can generate charts.",
  pricing: "Adeera has Basic, Pro, and Enterprise plans. Take a look at the pricing page, or ask to be connected for a custom quote.",
  support: "You can reach the team through the contact page, and we'll get back to you.",
  demo: "You can book a demo or watch the product videos on the demo page.",
  thank: "You're welcome! Let me know if there's anything else you'd like to know about Adeera.",
  thanks: "No problem — feel free to ask about POS, inventory, or payments.",
  security: "Adeera uses multi-tenant isolation so each business's data is walled off, with role-based permissions for staff.",
  cloud: "The dashboard is cloud-based — you can check sales and inventory from anywhere.",
  platform: "The ADEERA Platform brings POS, inventory, accounting, payroll, CRM, and payments together in one place.",
};

const QUICK_REPLIES: QuickReply[] = [
  { id: '1', text: 'Point of sale', category: 'pos' },
  { id: '2', text: 'M-Pesa payments', category: 'mpesa' },
  { id: '3', text: 'Inventory', category: 'inventory' },
  { id: '4', text: 'Pricing', category: 'pricing' },
  { id: '5', text: 'Talk to the team', category: 'support' },
];

const getAIResponse = (message: string): { text: string; link?: { text: string; url: string; icon: any } } => {
  const lower = message.toLowerCase();

  if (lower.includes('pos') || lower.includes('checkout') || lower.includes('till')) return { text: AI_RESPONSES.pos, link: { text: "See the POS", url: "/pos", icon: Info } };
  if (lower.includes('stock') || lower.includes('inventory')) return { text: AI_RESPONSES.inventory, link: { text: "See the platform", url: "/platform", icon: Info } };
  if (lower.includes('pay') || lower.includes('mpesa')) return { text: AI_RESPONSES.mpesa, link: { text: "See pricing", url: "/pricing", icon: Info } };
  if (lower.includes('security')) return { text: AI_RESPONSES.security };
  if (lower.includes('cloud')) return { text: AI_RESPONSES.cloud };
  if (lower.includes('hello') || lower.includes('hi')) return { text: AI_RESPONSES.hello };
  if (lower.includes('talk') || lower.includes('team') || lower.includes('human') || lower.includes('support')) return { text: AI_RESPONSES.support, link: { text: "Contact us", url: "/contact", icon: MessageCircle } };
  if (lower.includes('pricing') || lower.includes('cost')) return { text: AI_RESPONSES.pricing, link: { text: "See pricing", url: "/pricing", icon: Info } };
  if (lower.includes('demo')) return { text: AI_RESPONSES.demo, link: { text: "Book a demo", url: "/demo", icon: Info } };

  return { text: "I can help you find the right page for POS, inventory, payments, or pricing. What would you like to know?" };
};

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([{
          id: Date.now(),
          text: "Habari! I can help you find the right page for POS, inventory, payments, or pricing.",
          sender: 'ai',
          timestamp: new Date()
        }]);
      }, 800);
    }
  }, [isOpen]);

  const handleSendMessage = (text?: string) => {
    const content = text || newMessage;
    if (!content.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: content,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMsg]);
    setNewMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === userMsg.id ? { ...m, status: 'read' as const } : m));
    }, 1000);

    setTimeout(() => {
      setIsTyping(false);
      const response = getAIResponse(content);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: response.text,
        sender: 'ai',
        timestamp: new Date(),
        link: response.link
      }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary shadow-sm flex items-center justify-center text-primary-foreground relative z-[70]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquareMore className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-10 w-[380px] max-w-[calc(100vw-40px)] h-[min(600px,75vh)] bg-background rounded-xl shadow-lg border border-border flex flex-col overflow-hidden z-[65]"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border flex items-center gap-3">
               <div className="p-2 bg-primary/10 rounded-lg">
                  <BrainCircuit className="h-5 w-5 text-primary" />
               </div>
               <h3 className="font-semibold text-sm text-foreground">Ask about Adeera</h3>
               <button onClick={() => setIsOpen(false)} className="ml-auto text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-4 w-4" />
               </button>
            </div>

            {/* Scrollable Chat Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-6 space-y-4 scroll-smooth"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="max-w-[85%]">
                    <div className={`p-3.5 rounded-lg text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground border border-border'
                    }`}>
                      {msg.text}
                      {msg.link && (
                         <a href={msg.link.url} className="mt-3 flex items-center justify-between p-2.5 bg-background rounded-md border border-border hover:border-primary/40 transition-colors group">
                            <div className="flex items-center gap-2">
                               <msg.link.icon className="h-4 w-4 text-primary" />
                               <span className="text-xs font-medium">{msg.link.text}</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                         </a>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 px-1 opacity-50 text-[10px]">
                       <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                       {msg.sender === 'user' && msg.status === 'read' && <CheckCheck className="h-3 w-3" />}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-1.5 px-4 py-3 bg-muted rounded-lg w-14 h-9 items-center justify-center">
                   {[0,1,2].map(i => <motion.div key={i} animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 1, delay: i*0.2 }} className="w-1 h-1 bg-muted-foreground rounded-full" />)}
                </div>
              )}

              {/* In-Body Quick Replies */}
              {!isTyping && messages.length > 0 && messages[messages.length - 1].sender === 'ai' && (
                <div className="flex flex-wrap gap-2 pt-2">
                   {QUICK_REPLIES.map(reply => (
                     <button
                       key={reply.id}
                       onClick={() => handleSendMessage(reply.text)}
                       className="px-3 py-1.5 border border-border rounded-full text-xs font-medium bg-background hover:border-primary hover:text-primary transition-colors"
                     >
                       {reply.text}
                     </button>
                   ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
               <div className="relative flex items-center gap-2 bg-muted border border-border p-1 rounded-lg focus-within:ring-2 focus-within:ring-ring transition-all">
                  <Input
                    ref={inputRef}
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="border-none shadow-none focus-visible:ring-0 bg-transparent h-9 text-sm"
                    onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!newMessage.trim() || isTyping}
                    size="icon"
                    className="w-8 h-8 shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
