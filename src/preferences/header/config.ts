import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
    slug: 'header',
    access: {
        read: () => true,
    },
    admin: {
        group: 'Preferences'
    },
    fields: [
        {
            name: 'navItems',
            type: 'array',
            fields: [
                link({
                    appearances: false,
                }),
            ],
            maxRows: 6,
            admin: {
                initCollapsed: true,
                components: {
                    RowLabel: '@/preferences/header/RowLabel#RowLabel',
                },
            },
        },
    ],
    hooks: {
        afterChange: [revalidateHeader],
    },
}