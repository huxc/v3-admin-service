import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { extname } from 'path';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Controller('upload')
export class UploadController {
  constructor(private configService: ConfigService) {}

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './static/images',
        filename: (req, file, cb) => {
          // 生成文件名
          const filename = `${Date.now()}${extname(file.originalname)}`;
          cb(null, filename);
        },
      }),
    }),
  ) // 'file' 是前端传递文件时的字段名
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const host = this.configService.get<string>('DATABASE_HOST');
    // 返回响应
    return `${host}/images/${file.filename}`;
  }
}
