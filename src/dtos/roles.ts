import { role_permissions } from './role_permissions';
import { user_roles } from './user_roles';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class roles {
  @ApiProperty({ type: Number })
  role_id: number;

  @ApiProperty({ type: String })
  role_name: string;

  @ApiPropertyOptional({ type: String })
  description?: string;

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;

  @ApiProperty({ isArray: true, type: () => role_permissions })
  role_permissions: role_permissions[];

  @ApiProperty({ isArray: true, type: () => user_roles })
  user_roles: user_roles[];
}
