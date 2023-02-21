import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class Filter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
}
