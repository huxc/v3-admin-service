import { role_permissions } from './role_permissions';
import { user_permissions } from './user_permissions';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class permissions {
  @ApiProperty({ type: Number })
  permission_id: number;

  @ApiProperty({ type: String })
  permission_name: string;

  @ApiPropertyOptional({ type: String })
  description?: string;

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;

  @ApiProperty({ type: String })
  permission_code: string;

  @ApiProperty({ isArray: true, type: () => role_permissions })
  role_permissions: role_permissions[];

  @ApiProperty({ isArray: true, type: () => user_permissions })
  user_permissions: user_permissions[];
}
