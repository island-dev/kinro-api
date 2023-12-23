import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('kinro')
  @HttpCode(201)
  @Header('Content-Type', 'application/json')
  async getkinro(): Promise<string> {
    try {
      // Fetch HTML
      const response = await fetch('https://kinro.ntv.co.jp/');
      const html = await response.text();

      // Extract time tags
      const timeRegex = /<time[^>]*>(.*?)<\/time>/gs;
      const timeMatch = timeRegex.exec(html);
      if (!timeMatch) {
        throw new Error('No time tag found');
      }
      const timeText = timeMatch[1];

      // Extract paragraph tags
      const titleRegex = /<p[^>]*>(.*?)<\/p>/gs;
      const titleMatch = titleRegex.exec(html);
      if (!titleMatch) {
        throw new Error('No paragraph tag found');
      }
      const titleText = titleMatch[1];

      // Extract img tags
      const imgRegex = /<img[^>]*src="(.*?)"[^>]*>/gs;
      const imgMatch = imgRegex.exec(html);
      if (!imgMatch) {
        throw new Error('No img tag found');
      }
      const imgSrc = imgMatch[1];

      const infoJSON = {
        broadcastStartTime: timeText,
        title: titleText,
        imageUrl: imgSrc,
      };
      // Return time and imgSrc
      return JSON.stringify(infoJSON);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
