import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  X, 
  Send, 
  ChevronRight, 
  MessageCircle,
  Sparkles,
  Info,
  MessageSquareMore,
  BrainCircuit,
  Command,
  CheckCheck,
  Plus
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
  hello: "Habari! I'm your Adeera Guide. I'm here to help you navigate the unified ecosystem for your business. How can I assist you today?",
  hi: "Hello there! Welcome to Adeera. Ready to scale your business with Africa's most intelligent product suite? What can I tell you about?",
  pos: "Our **Smart POS** is offline-ready and built for speed. It handles sales, receipts, and X/Z reports seamlessly. It's the heartbeat of your store. Would you like to see the POS features section?",
  inventory: "Adeera **Inventory Management** synchronizes your stock across all branches in real-time. No more stock-outs or guest-work. It even handles multi-variant products like color/size.",
  payments: "We offer **Integrated Payments** directly at the checkout. Accept M-Pesa STK push, cards, and cash with instant reconciliation. Bank settlements are T+1.",
  mpesa: "Our M-Pesa integration is world-class. We support instant STK push—meaning your customers just enter their PIN on their phone. No manual paybill entries required!",
  ai: "I'm part of the **AI Business Assistant** suite! Beyond our chat, we offer WhatsApp booking automation and predictive sales forecasting for your business.",
  pricing: "Adeera offers modular pricing, so you only pay for what you use. \n\n• Smart POS: Competitive Monthly/Annual rates\n• Inventory: Scales with branch count\n• AI Assistant: Usage-based\n\nShould I connect you with a specialist for a custom quote?",
  support: "We provide 24/7 local support based in Nairobi. You can chat with us here, or call us at +254 700 000 000. For complex issues, I recommend our WhatsApp support channel.",
  whatsapp: "Need to speak with a human? [Click here to chat on WhatsApp](https://wa.me/254700000000) or Type 'Human' and I'll notify my team.",
  human: "I've alerted our team! In the meantime, you can jump into a live WhatsApp thread here: [Adeera WhatsApp Support](https://wa.me/254700000000).",
  demo: "I'd love to show you the ecosystem! You can schedule a 1-on-1 demo [here](/contact) or ask me for a quick overview of a specific module.",
  thank: "You're very welcome! I'm here 24/7 if you need more help growing your business with Adeera. Kwaheri! 😊",
  thanks: "No problem at all! Feel free to ask anything else about our POS, Inventory, or Payment solutions.",
};

const QUICK_REPLIES: QuickReply[] = [
  { id: '1', text: 'Smart POS', category: 'pos' },
  { id: '2', text: 'M-Pesa Pay', category: 'mpesa' },
  { id: '3', text: 'Cloud Stock', category: 'inventory' },
  { id: '4', text: 'Pricing', category: 'pricing' },
  { id: '5', text: 'Human Support', category: 'human' },
];

const getAIResponse = (message: string): { text: string; link?: { text: string; url: string; icon: any } } => {
  const lower = message.toLowerCase();
  
  if (lower.includes('pos') || lower.includes('checkout')) return { text: AI_RESPONSES.pos, link: { text: "Learn POS", url: "/services/pos", icon: Info } };
  if (lower.includes('stock') || lower.includes('inventory')) return { text: AI_RESPONSES.inventory, link: { text: "Stock Sync", url: "/services/inventory", icon: Info } };
  if (lower.includes('pay') || lower.includes('mpesa')) return { text: AI_RESPONSES.mpesa, link: { text: "M-Pesa Setup", url: "/services/payments", icon: Info } };
  if (lower.includes('hello') || lower.includes('hi')) return { text: AI_RESPONSES.hello };
  if (lower.includes('whatsapp') || lower.includes('human')) return { text: AI_RESPONSES.whatsapp, link: { text: "Chat on WhatsApp", url: "https://wa.me/254700000000", icon: MessageCircle } };
  
  return { text: "I'm your Adeera Guide. I can help with POS, Inventory, and Payments. What would you like to explore?" };
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
          text: "Jambo! I'm your Adeera Guide. Ready to scale your business?",
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
        className="w-16 h-16 rounded-full bg-primary shadow-2xl flex items-center justify-center text-white border-2 border-white/20 relative z-[70]"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-full"></div>
        {isOpen ? <X className="h-7 w-7 relative z-10" /> : <MessageSquareMore className="h-7 w-7 relative z-10" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-10 w-[420px] max-w-[calc(100vw-40px)] h-[min(680px,80vh)] bg-white dark:bg-slate-950 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden backdrop-blur-2xl z-[65]"
          >
            {/* Slim Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-primary to-blue-600 flex items-center gap-4 text-white">
               <div className="relative">
                  <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md border border-white/20">
                     <BrainCircuit className="h-6 w-6" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-primary"></span>
               </div>
               <div>
                  <h3 className="font-bold text-lg leading-tight">Adeera Guide</h3>
                  <div className="flex items-center gap-1.5 opacity-80">
                     <span className="text-[10px] font-bold uppercase tracking-widest">Always Online</span>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="ml-auto opacity-60 hover:opacity-100 transition-opacity">
                  <X className="h-5 w-5" />
               </button>
            </div>

            {/* Scrollable Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-6 py-8 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="max-w-[85%]">
                    <div className={`p-4 rounded-3xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-200/50 dark:border-slate-800'
                    }`}>
                      {msg.text}
                      {msg.link && (
                         <a href={msg.link.url} className="mt-3 flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
                            <div className="flex items-center gap-2">
                               <msg.link.icon className="h-4 w-4 text-primary" />
                               <span className="text-xs font-bold">{msg.link.text}</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                         </a>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 px-1 opacity-40 text-[10px]">
                       <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                       {msg.sender === 'user' && msg.status === 'read' && <CheckCheck className="h-3 w-3" />}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex gap-1.5 px-4 py-3 bg-slate-100 rounded-2xl w-14 h-9 items-center justify-center">
                   {[0,1,2].map(i => <motion.div key={i} animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 1, delay: i*0.2 }} className="w-1 h-1 bg-slate-400 rounded-full" />)}
                </div>
              )}

              {/* In-Body Quick Replies */}
              {!isTyping && messages.length > 0 && messages[messages.length - 1].sender === 'ai' && (
                <div className="flex flex-wrap gap-2 pt-4">
                   {QUICK_REPLIES.map(reply => (
                     <button
                       key={reply.id}
                       onClick={() => handleSendMessage(reply.text)}
                       className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold bg-white dark:bg-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm"
                     >
                       {reply.text}
                     </button>
                   ))}
                </div>
              )}
              <div className="h-4" /> {/* Bottom Spacing */}
            </div>

            {/* Seamless Floating Input */}
            <div className="p-6 pt-2 bg-gradient-to-t from-white dark:from-slate-950 via-white dark:via-slate-950 to-transparent">
               <div className="relative flex items-center gap-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1.5 rounded-3xl focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <button className="p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                     <Plus className="h-5 w-5" />
                  </button>
                  <Input
                    ref={inputRef}
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="border-none shadow-none focus-visible:ring-0 bg-transparent h-10 text-sm"
                    onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    onClick={() => handleSendMessage()}
                    disabled={!newMessage.trim() || isTyping}
                    className="w-10 h-10 p-0 rounded-2xl shadow-lg shrink-0"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
               </div>
               <p className="mt-4 text-center text-[10px] font-bold text-slate-300 dark:text-slate-700 uppercase tracking-[0.2em]">Adeera Unified AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
