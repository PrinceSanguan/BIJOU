import { PageProps as InertiaPageProps } from '@inertiajs/core';

export interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    details: string[];
}

export interface PageProps<T extends Record<string, unknown> = Record<string, unknown>>
    extends Omit<InertiaPageProps, 'errors' | 'auth'> {
    [key: string]: unknown;
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
            email_verified_at: string | null;
            created_at: string;
            updated_at: string;
        } | null;
    };
    flash: {
        message?: string;
        error?: string;
        success?: string;
    };
}

export interface ServicePageProps extends PageProps {
    service: Service;
}
