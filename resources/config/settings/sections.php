<?php

return [
    'monitoring' => [
        'stacked' => false,
        'tabs' => [
            'general_setting' => [
                'title' => 'visiosoft.theme.defaultadmin::section.general_setting.name',
                'fields' => [
                    'title',
                    'inline-css-admin-theme',
                    'interactive_side_menu',
                    'sidebar_hover',
                    'login_icon',
                    'panel_icon',
                    'footer_copyright_org_name'
                ],
            ],
            'light_mode' => [
                'title' => 'visiosoft.theme.defaultadmin::section.light_mode.name',
                'fields' => [
                    'active_sidebar_border_color',
                    'primary_color',
                    'secondary_color',
                    'background_color',
                    'block_background_color',
                    'negative_color',
                    'positive_color',
                    'warning_color',
                    'info_color',
                    'menu_link_color',
                    'menu_icon_color',
                    'links_color',
                    'links_hover_active_color',
                    'text_color',
                    'input_background_color',
                    'input_placeholder_color',
                    'input_focused_background_color',
                    'input_focused_border_color'
                ]
            ],
            'help' => [
                'title' => 'visiosoft.theme.defaultadmin::section.help.name',
                'fields' => [
                    'help_one_title', 'help_one_link', 'help_two_title', 'help_two_link'
                ]
            ]
        ]
    ]
];
