import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { PostsService } from '../posts/posts.service.js';

@Injectable()
export class UsersService {
  constructor(private readonly postsService: PostsService) {}

  private users = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
      age: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Jane',
      email: 'jane@example.com',
      age: 25,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return {
      posts: this.postsService.getPosts(),
      users: this.users,
    };
  }

  findOne(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return `User with id ${id} not found`;
    }
    return this.users[userIndex];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return `User with id ${id} not found`;
    }
    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
      updatedAt: new Date(),
    };
    // {shi p thar, updated data}
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const removedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return `user with id ${id} has been removed successfully`;
  }
}
