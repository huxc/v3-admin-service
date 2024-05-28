import { Injectable } from '@nestjs/common';
import { customer as CustomerDto } from '../../dtos/customer';
import { PrismaClient } from '@prisma/client';
import { pagination } from 'prisma-extension-pagination';
import { SeachDto } from './dto/seachDto';
import { customer as customerDto } from '../../dtos/customer';

const prisma = new PrismaClient().$extends(pagination());

@Injectable()
export class CustomerService {
  async create(createCustomerDto: customerDto) {
    const { created_at, updated_at } = createCustomerDto;
    createCustomerDto.created_at = new Date(created_at);
    createCustomerDto.updated_at = new Date(updated_at);
    return await prisma.customer.create({ data: createCustomerDto });
  }

  async findAll(params: SeachDto) {
    const { pageSize, pageNum, ...param } = params;
    const [list, paginater] = await prisma.customer.paginate().withPages({
      limit: pageSize,
      page: pageNum,
      includePageCount: true,
    });
    return { list, ...paginater };
  }

  async findOne(id: number) {
    return await prisma.customer.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCustomerDto: CustomerDto) {
    return await prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  async remove(id: number) {
    return await prisma.customer.deleteMany({
      where: { id },
    });
  }
}
