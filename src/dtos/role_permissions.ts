import { roles } from './roles';
import { permissions } from './permissions';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class role_permissions {
  @ApiProperty({ type: Number })
  role_permission_id: number;

  @ApiProperty({ type: Number })
  role_id: number;

  @ApiProperty({ type: Number })
  permission_id: number;

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;

  @ApiProperty({ type: () => roles })
  roles: roles;

  @ApiProperty({ type: () => permissions })
  permissions: permissions;
}
