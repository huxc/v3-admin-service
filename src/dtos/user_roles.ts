import { users } from './users';
import { roles } from './roles';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class user_roles {
  @ApiProperty({ type: Number })
  user_role_id: number;

  @ApiProperty({ type: Number })
  user_id: number;

  @ApiProperty({ type: Number })
  role_id: number;

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;

  @ApiProperty({ type: () => users })
  users: users;

  @ApiProperty({ type: () => roles })
  roles: roles;
}
