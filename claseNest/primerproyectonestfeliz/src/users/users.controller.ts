import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { Request } from '@nestjs/common';
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private configService: ConfigService) {}

  @Post()
  create(@Body() createUser: CreateUserDto) {
      if(!createUser.first_name||!createUser.email||!createUser.password)
      throw new HttpException('Valores incompletos',HttpStatus.BAD_REQUEST)
        return this.usersService.create(createUser);
  }

  @Get()
  async findAll(@Request() req) {
    const {limit} = req.query;
    console.log(this.configService.get<string>('PAPA'))
    const users = await this.usersService.findAll(+limit);
    return {status:"success",users}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
