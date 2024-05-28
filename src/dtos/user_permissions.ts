import { users } from './users';
import { permissions } from './permissions';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class user_permissions {
  @ApiProperty({ type: Number })
  user_permission_id: number;

  @ApiProperty({ type: Number })
  user_id: number;

  @ApiProperty({ type: Number })
  permission_id: number;

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;

  @ApiProperty({ type: () => users })
  users: users;

  @ApiProperty({ type: () => permissions })
  permissions: permissions;
}
