import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  
  // POST /api/contacts - Handle contact form submissions
  app.post('/api/contacts', async (req: Request, res: Response) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          message: 'Name, email, and message are required' 
        });
      }

      // For now, just acknowledge receipt
      // In production, this would save to database and send email
      console.log('Contact form submission:', { name, email, message });
      
      res.json({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: 'Failed to process contact form' 
      });
    }
  });

  // POST /api/orders - Handle order submissions
  app.post('/api/orders', async (req: Request, res: Response) => {
    try {
      const orderData = req.body;
      
      if (!orderData.items || !orderData.total || !orderData.customer) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          message: 'Order items, total, and customer information are required' 
        });
      }

      // For now, just create a mock order ID
      // In production, this would save to database and process payment
      const orderId = `order_${Date.now()}`;
      console.log('Order received:', { orderId, ...orderData });
      
      res.json({ 
        success: true, 
        id: orderId,
        message: 'Order processed successfully' 
      });
    } catch (error) {
      console.error('Error processing order:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: 'Failed to process order' 
      });
    }
  });

  // GET /api/health - Health check endpoint
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}