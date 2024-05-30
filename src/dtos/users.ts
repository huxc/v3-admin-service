import { user_permissions } from './user_permissions';
import { user_roles } from './user_roles';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class users {
  @ApiProperty({ type: Number })
  user_id: number;

  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  password: string;

  @ApiPropertyOptional({ type: String })
  email?: string;

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;

  @ApiPropertyOptional({ type: String })
  nickname?: string;

  @ApiProperty({ isArray: true, type: () => user_permissions })
  user_permissions: user_permissions[];

  @ApiProperty({ isArray: true, type: () => user_roles })
  user_roles: user_roles[];
}
