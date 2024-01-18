import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
 constructor(private readonly appService: AppService) {}
 
 @Get()
 @HttpCode(201)
 @Header('Content-Type', 'application/json')
 async getkinro(): Promise<string> {
   try {
     const response = await fetch('https://kinro.ntv.co.jp/');
     const html = await response.text();

     const regex = /<time[^>]*>(.*?)<\/time>|<p[^>]*>(.*?)<\/p>|<img[^>]*src="(.*?)"[^>]*>|<mark[^>]*>(.*?)<\/mark>/gs;
     const matches = Array.from(html.matchAll(regex));

     const timeText = matches.find(match => match[1])?.[1];
     const titleText = matches.find(match => match[2])?.[2];
     const imgSrc = matches.find(match => match[3])?.[3];
     const MitaiSrc = matches.find(match => match[4])?.[4];

     if (!timeText || !titleText || !imgSrc || !MitaiSrc) {
       throw new Error('要素が見つかりませんでした');
     }

     const infoJSON = {
       broadcastStartTime: timeText,
       title: titleText,
       imageUrl: imgSrc,
       mitai: parseInt(MitaiSrc),
     };

     return JSON.stringify(infoJSON);
   } catch (error) {
     console.error('Error:', error);
     throw error;
   }
 }
}
