import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customer as CustomerDto } from '../../dtos/customer';
import { SeachDto } from './dto/seachDto';
import { get } from 'http';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Post('savelist')
  createMany(@Body() createUserDtos: CustomerDto[]) {
    return this.customerService.createMany(createUserDtos);
  }

  @Post('list')
  async findAll(@Body() params: SeachDto) {
    return this.customerService.findAll(params);
  }

  @Get()
  async findList(@Query() params: SeachDto) {
    return this.customerService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCustomerDto: CustomerDto) {
    return this.customerService.update(id, updateCustomerDto);
  }

  @Delete()
  remove(@Body() ids: number[]) {
    return this.customerService.remove(ids);
  }
}
