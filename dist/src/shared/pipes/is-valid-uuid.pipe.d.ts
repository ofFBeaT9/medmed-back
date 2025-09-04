import { PipeTransform } from '@nestjs/common';
export declare class IsValidUuidPipe implements PipeTransform<string, string> {
    transform(value: string): string;
}
