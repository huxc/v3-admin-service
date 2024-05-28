import { ApiProperty } from '@nestjs/swagger';

export class customer {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  gender: number;

  @ApiProperty({ type: Number })
  age: number;

  @ApiProperty({ type: String })
  id_card: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  address: string;

  @ApiProperty({ type: Number })
  status: number;

  @ApiProperty({ type: String })
  avatar: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ type: Date })
  updated_at: Date;
}
