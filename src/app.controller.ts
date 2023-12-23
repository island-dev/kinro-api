import { Controller, Get, Head, Header, HttpCode, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { info } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('kinro')
  @HttpCode(201)
  @Header("Content-Type", "application/json")
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

      const pRegex = /<p[^>]*>(.*?)<\/p>/gs;
      const pMatch = pRegex.exec(html);
      if (!pMatch) {
        throw new Error('No time tag found');
      }
      const pText = pMatch[1];
     
      // Extract img tags
      const imgRegex = /<img[^>]*src="(.*?)"[^>]*>/gs;
      const imgMatch = imgRegex.exec(html);
      if (!imgMatch) {
        throw new Error('No img tag found');
      }
      const imgSrc = imgMatch[1];
      
      const infoJSON = {
        "time": timeText,
        "title": pText,
        "imgUrl": imgSrc,
      }
      // Return time and imgSrc
      return JSON.stringify(infoJSON);
      } catch (error) {
      console.error('Error:', error);
      throw error;
      }
  }
}
