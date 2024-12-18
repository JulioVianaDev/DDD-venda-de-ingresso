import { IRepository } from 'src/@core/common/domain/repositories/repository-interface';
import { Partner } from '../entities/partner.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPartnerRepository extends IRepository<Partner> { }