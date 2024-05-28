import { ApiProperty } from '@nestjs/swagger';

export class account {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  nickName: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  status: number;

  @ApiProperty({ type: String })
  pwd: string;
}
