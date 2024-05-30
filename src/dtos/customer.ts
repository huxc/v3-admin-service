import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
export class customer {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  @IsInt()
  gender: number;

  @ApiProperty({ type: Number })
  @IsInt()
  age: number;

  @ApiProperty({ type: String })
  id_card: string;

  @ApiPropertyOptional({ type: String })
  email?: string;

  @ApiProperty({ type: String })
  address: string;

  @ApiPropertyOptional({ type: Number })
  status?: number = 1;

  @ApiPropertyOptional({ type: String })
  avatar?: string;

  @ApiPropertyOptional({ type: Date })
  created_at?: string;

  @ApiPropertyOptional({ type: Date })
  updated_at?: string;
}
