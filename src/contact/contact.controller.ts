import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async createContact(@Body() contactData: Contact): Promise<Contact> {
    try {
      return this.contactService.createContact(contactData);
    } catch (error) {
      throw new HttpException(
        'Contact creation failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
