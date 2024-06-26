import { Injectable } from '@nestjs/common';
import { customer as CustomerDto } from '../../dtos/customer';
import { parse, format } from 'date-fns';
import { PrismaClient } from '@prisma/client';
import { pagination } from 'prisma-extension-pagination';
import { SeachDto } from './dto/seachDto';
import { customer as customerDto } from '../../dtos/customer';

const prisma = new PrismaClient().$extends(pagination());

@Injectable()
export class CustomerService {
  async create(createCustomerDto: customerDto) {
    Object.assign(createCustomerDto, {
      created_at: new Date().toISOString(),
    });
    return await prisma.customer.create({ data: createCustomerDto });
  }

  async createMany(createUserDtos: customerDto[]) {
    for (let i = 0; i < createUserDtos.length; i++) {
      createUserDtos[i].updated_at = new Date(createUserDtos[i].updated_at);
      createUserDtos[i].created_at = new Date(createUserDtos[i].created_at);
    }
    return await prisma.customer.createMany({ data: createUserDtos });
  }

  async findAll(params: SeachDto) {
    const { pageSize, pageNum, ...param } = params;
    prisma.customer.findMany({
      select: {},
    });
    const [list, paginater] = await prisma.customer
      .paginate({
        where: {
          age: param.age,
          gender: param.gender,
          name: { contains: param.name },
          id_card: { contains: param.idCard },
          ...(param.createdStartAt &&
            param.createdEndAt && {
              created_at: {
                gte: new Date(param.createdStartAt),
                lt: new Date(param.createdEndAt),
              },
            }),
        },
        orderBy: [{ id: 'desc' }],
      })
      .withPages({
        limit: pageSize,
        page: pageNum,
        includePageCount: true,
      });

    fmtDate(list);

    return { list, ...paginater };
  }

  async findOne(id: number) {
    return await prisma.customer.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCustomerDto: CustomerDto) {
    return await prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  async remove(ids: number[]) {
    return await prisma.customer.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}

function fmtDate(list: customerDto[]): void {
  for (const item of list) {
    const createdAt: unknown = format(
      new Date(item.created_at),
      'yyyy-MM-dd HH:mm:ss',
    );
    const updatedAt: unknown = format(
      new Date(item.updated_at),
      'yyyy-MM-dd HH:mm:ss',
    );
    item.created_at = createdAt as Date;
    item.updated_at = updatedAt as Date;
  }
}
