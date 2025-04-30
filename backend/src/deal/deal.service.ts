import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { app } from 'firebase-admin';

import { Deal, DealDto, EnrollDto, UpdateDto } from './dto/deal.dto';
import { FirebaseService } from '../firebase/firebase.service';
import { EmailService } from '../mail/mail.service';
import { ROLE_NAMES } from 'lib/constants';
import { Role } from 'lib/auth/decorators/role.decorator';

@Role(ROLE_NAMES.MERCHANT)
@Injectable()
export class DealService extends FirebaseService {
  public firestore: FirebaseFirestore.Firestore;

  constructor(
    private readonly mailService: EmailService,
    @Inject('FIREBASE_APP') private readonly firebaseApp: app.App,
  ) {
    super();
    this.firestore = this.firebaseApp.firestore();
  }

  async enrollDeal(enrollDto: EnrollDto): Promise<{ status: string }> {
    try {
      console.log(enrollDto);
      const { email } = enrollDto;

      this.mailService.sendEmail({
        to: email,
        data: { ...enrollDto },
        subject: 'Deal Enrollment Confirmation',
      });

      return { status: 'sended' };
    } catch (error) {
      throw new Error(`Failed to send mail: ${error.message}`);
    }
  }

  async create(deal: Deal): Promise<Deal> {
    try {
      const dealDoc = await this.firestore.collection('deals').add({
        ...deal,
        date: new Date(),
      });

      const createdDealSnapshot = await this.firestore.collection('deals').doc(dealDoc.id).get();
      const updatedDeal = createdDealSnapshot.data() as DealDto;
      return { id: dealDoc.id, ...updatedDeal };
    } catch (error) {
      throw new Error(`Failed to create deal: ${error.message}`);
    }
  }

  async getById(id: string): Promise<Deal | null> {
    try {
      const dealDoc = await this.firestore.collection('deals').doc(id).get();

      if (!dealDoc.exists) {
        throw new BadRequestException(`Incorrect id ${id}`);
      }

      return {
        id: dealDoc.id,
        ...dealDoc.data(),
      } as Deal;
    } catch (error) {
      throw new Error(`Failed to get deal by ID: ${error.message}`);
    }
  }

  async getAll(): Promise<Deal[]> {
    try {
      const dealSnapshot = await this.firestore.collection('deals').get();

      return dealSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })) as Deal[];
    } catch (error) {
      throw new Error(`Failed to get all deals: ${error.message}`);
    }
  }

  async update(id: string, props: UpdateDto): Promise<DealDto> {
    try {
      await this.firestore.collection('deals').doc(id).update({
        ...props,
      });

      const updatedDealSnapshot = await this.firestore.collection('deals').doc(id).get();

      if (!updatedDealSnapshot.exists) {
        throw new Error(`Deal with ID ${id} does not exist`);
      }

      const updatedDeal = updatedDealSnapshot.data() as DealDto;
      return { id, ...updatedDeal };

    } catch (error) {
      throw new Error(`Failed to update deal ${id}: ${error.message}`);
    }
  }

  async delete(uid: string): Promise<string> {
    try {
      await this.firestore.collection('deals').doc(uid).delete();
      return `Deal deleted by id ${uid}`;
    } catch (error) {
      throw new Error(`Failed to delete deal ${uid}: ${error.message}`);
    }
  }
}
