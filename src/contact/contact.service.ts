import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async createContact(contactData: Partial<Contact>): Promise<Contact> {
    const contact = this.contactRepository.create(contactData);
    return this.contactRepository.save(contact);
  }
}
