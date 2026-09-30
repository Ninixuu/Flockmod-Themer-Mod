(() => {
    let customizationsEnabled = true;

    const MOD_BUTTON_SELECTOR = ".themeModMenuButton";
    const MOD_DIALOG_SELECTOR = '.dialog[name="themeModMenu"]';

            const SIDEBAR_COLOR_SETTINGS = [
        {
            cls: "flockmodSidebarPrimaryActive",
            cssVar: "--flockmod-custom-sidebar-primary",
            toggleId: "themeModSidebarPrimaryEnabled",
            inputId: "themeModUISidebarPrimary",
            lsEnabled: "flockmodCustomSidebarPrimaryEnabled",
            lsColor: "flockmodCustomSidebarPrimaryColor",
            defaultColor: "#1d1e22",
            name: "Primary Sidebar Color",
            description: "Main sidebar background and slider/switch thumbs."
        },
        {
            cls: "flockmodSidebarSecondaryActive",
            cssVar: "--flockmod-custom-sidebar-secondary",
            toggleId: "themeModSidebarSecondaryEnabled",
            inputId: "themeModUISidebarSecondary",
            lsEnabled: "flockmodCustomSidebarSecondaryEnabled",
            lsColor: "flockmodCustomSidebarSecondaryColor",
            defaultColor: "#2f3136",
            name: "Secondary Sidebar Color",
            description: "Section backgrounds inside the sidebar (User list, Tool options, Layers, etc)."
        },
        {
            cls: "flockmodSidebarCollapserActive",
            cssVar: "--flockmod-custom-sidebar-collapser",
            toggleId: "themeModSidebarCollapserEnabled",
            inputId: "themeModUISidebarCollapser",
            lsEnabled: "flockmodCustomSidebarCollapserEnabled",
            lsColor: "flockmodCustomSidebarCollapserColor",
            defaultColor: "#3a3c43",
            name: "Collapser Color",
            description: "The bars at the bottom of each sidebar section (the ones with the grip lines)."
        },
        {
            cls: "flockmodSidebarAccentActive",
            cssVar: "--flockmod-custom-sidebar-accent",
            toggleId: "themeModSidebarAccentEnabled",
            inputId: "themeModUISidebarAccent",
            lsEnabled: "flockmodCustomSidebarAccentEnabled",
            lsColor: "flockmodCustomSidebarAccentColor",
            defaultColor: "#378de4",
            name: "Accent 1",
            description: "Sidebar border, and slider fills and switch on-states in the sidebar and popups."
        },
        {
            cls: "flockmodSidebarInactiveActive",
            cssVar: "--flockmod-custom-sidebar-inactive",
            toggleId: "themeModSidebarInactiveEnabled",
            inputId: "themeModUISidebarInactive",
            lsEnabled: "flockmodCustomSidebarInactiveEnabled",
            lsColor: "flockmodCustomSidebarInactiveColor",
            defaultColor: "#3a3c43",
            name: "Accent 2",
            description: "Unselected layers, dropdowns, switch off states, empty slider tracks, and checkbox backgrounds."
        },
        {
            cls: "flockmodSidebarIconActive",
            cssVar: "--flockmod-custom-sidebar-icon",
            toggleId: "themeModSidebarIconEnabled",
            inputId: "themeModUISidebarIcon",
            lsEnabled: "flockmodCustomSidebarIconEnabled",
            lsColor: "flockmodCustomSidebarIconColor",
            defaultColor: "#acb3ba",
            name: "Sidebar Icon Color",
            description: "Section title icons, collapse arrows, and layer action icons."
        }
    ];

    const POPUP_COLOR_SETTINGS = [
        {
            cls: "flockmodPopupBackgroundActive",
            cssVar: "--flockmod-custom-popup-background",
            toggleId: "themeModPopupBackgroundEnabled",
            inputId: "themeModUIPopupBackground",
            lsEnabled: "flockmodCustomPopupBackgroundEnabled",
            lsColor: "flockmodCustomPopupBackgroundColor",
            defaultColor: "#1d1e22",
            name: "Popup Background",
            description: "Popup window background, inactive title bars, dropdown and right-click menus."
        },
        {
            cls: "flockmodPopupContentActive",
            cssVar: "--flockmod-custom-popup-content",
            toggleId: "themeModPopupContentEnabled",
            inputId: "themeModUIPopupContent",
            lsEnabled: "flockmodCustomPopupContentEnabled",
            lsColor: "flockmodCustomPopupContentColor",
            defaultColor: "#2f3136",
            name: "Popup Content Color",
            description: "The main content area inside popups, and the selected chat channel."
        },
        {
            cls: "flockmodPopupTitleBarActive",
            cssVar: "--flockmod-custom-popup-titlebar",
            toggleId: "themeModPopupTitleBarEnabled",
            inputId: "themeModUIPopupTitleBar",
            lsEnabled: "flockmodCustomPopupTitleBarEnabled",
            lsColor: "flockmodCustomPopupTitleBarColor",
            defaultColor: "#4f4f55",
            name: "Title Bar Color",
            description: "Title bar of the active (focused) popup."
        },
        {
            cls: "flockmodPopupTitleTextActive",
            cssVar: "--flockmod-custom-popup-titletext",
            toggleId: "themeModPopupTitleTextEnabled",
            inputId: "themeModUIPopupTitleText",
            lsEnabled: "flockmodCustomPopupTitleTextEnabled",
            lsColor: "flockmodCustomPopupTitleTextColor",
            defaultColor: "#ffffff",
            name: "Title Bar Text & Icons",
            description: "Popup titles and the help/maximize/close buttons."
        },
        {
            cls: "flockmodPopupBorderActive",
            cssVar: "--flockmod-custom-popup-border",
            toggleId: "themeModPopupBorderEnabled",
            inputId: "themeModUIPopupBorder",
            lsEnabled: "flockmodCustomPopupBorderEnabled",
            lsColor: "flockmodCustomPopupBorderColor",
            defaultColor: "#707379",
            name: "Border Color",
            description: "Popup borders and resize edges, menu borders, chat room tab edges."
        },
        {
            cls: "flockmodPopupFieldActive",
            cssVar: "--flockmod-custom-popup-field",
            toggleId: "themeModPopupFieldEnabled",
            inputId: "themeModUIPopupField",
            lsEnabled: "flockmodCustomPopupFieldEnabled",
            lsColor: "flockmodCustomPopupFieldColor",
            defaultColor: "#43444a",
            name: "Field Color",
            description: "Text boxes, dropdowns, the chat input, and slider/switch tracks inside popups."
        },
        {
            cls: "flockmodPopupButtonActive",
            cssVar: "--flockmod-custom-popup-button",
            toggleId: "themeModPopupButtonEnabled",
            inputId: "themeModUIPopupButton",
            lsEnabled: "flockmodCustomPopupButtonEnabled",
            lsColor: "flockmodCustomPopupButtonColor",
            defaultColor: "#7c7f87",
            name: "Button Color",
            description: "Popup buttons (chat send/emoji, New PM, etc)."
        },
        {
            cls: "flockmodPopupButtonTextActive",
            cssVar: "--flockmod-custom-popup-buttontext",
            toggleId: "themeModPopupButtonTextEnabled",
            inputId: "themeModUIPopupButtonText",
            lsEnabled: "flockmodCustomPopupButtonTextEnabled",
            lsColor: "flockmodCustomPopupButtonTextColor",
            defaultColor: "#ffffff",
            name: "Button Text & Icons",
            description: "Text and icons on popup buttons, and the chat font size arrows."
        }
    ];

    const CHAT_COLOR_SETTINGS = [
        {
            cls: "flockmodChatChannelsActive",
            cssVar: "--flockmod-custom-chat-channels",
            toggleId: "themeModChatChannelsEnabled",
            inputId: "themeModUIChatChannels",
            lsEnabled: "flockmodCustomChatChannelsEnabled",
            lsColor: "flockmodCustomChatChannelsColor",
            defaultColor: "#1d1e22",
            name: "Channel List Color",
            description: "Background of the channel list on the left of the chat, and the Messenger's contact list."
        },
        {
            cls: "flockmodChatMessageActive",
            cssVar: "--flockmod-custom-chat-message",
            toggleId: "themeModChatMessageEnabled",
            inputId: "themeModUIChatMessage",
            lsEnabled: "flockmodCustomChatMessageEnabled",
            lsColor: "flockmodCustomChatMessageColor",
            defaultColor: "#ffffff",
            name: "Message Text",
            description: "Chat message text. Usernames keep their role colors."
        },
        {
            cls: "flockmodChatEventActive",
            cssVar: "--flockmod-custom-chat-event",
            toggleId: "themeModChatEventEnabled",
            inputId: "themeModUIChatEvent",
            lsEnabled: "flockmodCustomChatEventEnabled",
            lsColor: "flockmodCustomChatEventColor",
            defaultColor: "#808080",
            name: "System Message Text",
            description: "Event messages like joins and friend requests. MOTD and GM messages keep their native colors."
        },
        {
            cls: "flockmodChatTimestampActive",
            cssVar: "--flockmod-custom-chat-timestamp",
            toggleId: "themeModChatTimestampEnabled",
            inputId: "themeModUIChatTimestamp",
            lsEnabled: "flockmodCustomChatTimestampEnabled",
            lsColor: "flockmodCustomChatTimestampColor",
            defaultColor: "#808080",
            name: "Timestamp Color",
            description: "The time next to each message."
        }
    ];

    /* Every toggle+picker color that shares the sidebar-style wiring
       (init / preview / apply / reset / close / load). */
    const TOGGLE_COLOR_SETTINGS = [
        ...SIDEBAR_COLOR_SETTINGS,
        ...POPUP_COLOR_SETTINGS,
        ...CHAT_COLOR_SETTINGS
    ];

    function applySidebarColorPreview(setting, enabled, color) {
        document.documentElement.classList.toggle(
            setting.cls,
            enabled
        );

        document.documentElement.style.setProperty(
            setting.cssVar,
            color
        );
    }

    function getSavedSidebarColor(setting) {
        return {
            enabled:
                localStorage.getItem(setting.lsEnabled) === "true",
            color:
                localStorage.getItem(setting.lsColor) || setting.defaultColor
        };
    }

    function applySavedSidebarColors() {
        TOGGLE_COLOR_SETTINGS.forEach((setting) => {
            const saved = getSavedSidebarColor(setting);

            applySidebarColorPreview(
                setting,
                customizationsEnabled ? saved.enabled : false,
                saved.color
            );
        });
    }

    function buildSidebarColorRowsHTML(list = SIDEBAR_COLOR_SETTINGS) {
        return list.map((setting) => `
    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                ${setting.name}
            </div>

            <div class="themeModSettingDescription">
                ${setting.description}
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="${setting.toggleId}">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="${setting.inputId}" value="${setting.defaultColor}">

    </div>
    ${gradientRowHTML(setting)}
        `).join("");
    }

    const TOPBAR_COLOR_SETTINGS = [
    {
        cls: "flockmodTopBarBackgroundActive",
        cssVar: "--flockmod-custom-topbar-background",
        toggleId: "themeModTopBarBackgroundEnabled",
        inputId: "themeModUITopBarBackground",
        lsEnabled: "flockmodCustomTopBarBackgroundEnabled",
        lsColor: "flockmodCustomTopBarBackgroundColor",
        defaultColor: "#3a3c43",
        name: "Top Bar Color",
        description: "Background of the top bar."
    },
    {
        cls: "flockmodTopBarTextColorActive",
        cssVar: "--flockmod-custom-topbar-text",
        toggleId: "themeModTopBarTextColorEnabled",
        inputId: "themeModUITopBarTextColor",
        lsEnabled: "flockmodCustomTopBarTextColorEnabled",
        lsColor: "flockmodCustomTopBarTextColor",
        defaultColor: "#ffffff",
        name: "Button Text Color",
        description: "Override the top bar icon buttons (Configuration, Chat, Fullscreen, Leave room)."
    },
    {
        cls: "flockmodTopBarHoverActive",
        cssVar: "--flockmod-custom-topbar-hover",
        toggleId: "themeModTopBarHoverEnabled",
        inputId: "themeModUITopBarHover",
        lsEnabled: "flockmodCustomTopBarHoverEnabled",
        lsColor: "flockmodCustomTopBarHoverColor",
        defaultColor: "#2e2f35",
        name: "Button Hover Color",
        description: "Background of top bar buttons when hovered."
    },
    {
        cls: "flockmodTopBarBrandActive",
        cssVar: "--flockmod-custom-topbar-brand",
        toggleId: "themeModTopBarBrandEnabled",
        inputId: "themeModUITopBarBrand",
        lsEnabled: "flockmodCustomTopBarBrandEnabled",
        lsColor: "flockmodCustomTopBarBrandColor",
        defaultColor: "#ffffff",
        name: "Brand Title Color",
        description: "The FlockMod title and version tag in the top bar."
    },
    {
        cls: "flockmodTopBarProgressActive",
        cssVar: "--flockmod-custom-topbar-progress",
        toggleId: "themeModTopBarProgressEnabled",
        inputId: "themeModUITopBarProgress",
        lsEnabled: "flockmodCustomTopBarProgressEnabled",
        lsColor: "flockmodCustomTopBarProgressColor",
        defaultColor: "#378de4",
        name: "Progress Bar Color",
        description: "The loading/progress bar at the top."
    },
    {
        cls: "flockmodTopBarActivityActive",
        cssVar: "--flockmod-custom-topbar-activity",
        toggleId: "themeModTopBarActivityEnabled",
        inputId: "themeModUITopBarActivity",
        lsEnabled: "flockmodCustomTopBarActivityEnabled",
        lsColor: "flockmodCustomTopBarActivityColor",
        defaultColor: "#2e2f35",
        name: "Activity Bar Color",
        description: "The bar around the latest activity (PM/EVENT/MOTD tags keep their colors)."
    }
];

function applyTopBarColorPreview(setting, enabled, color) {
    document.documentElement.classList.toggle(setting.cls, enabled);
    document.documentElement.style.setProperty(setting.cssVar, color);
}

function getSavedTopBarColor(setting) {
    return {
        enabled: localStorage.getItem(setting.lsEnabled) === "true",
        color: localStorage.getItem(setting.lsColor) || setting.defaultColor
    };
}

function applySavedTopBarColors() {
    BAR_COLOR_SETTINGS.forEach((setting) => {
        const saved = getSavedTopBarColor(setting);
        applyTopBarColorPreview(
            setting,
            customizationsEnabled ? saved.enabled : false,
            saved.color
        );
    });
}

function buildTopBarColorRowsHTML() {
    return TOPBAR_COLOR_SETTINGS.map((setting) => `
    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                ${setting.name}
            </div>

            <div class="themeModSettingDescription">
                ${setting.description}
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="${setting.toggleId}">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="${setting.inputId}" value="${setting.defaultColor}">

    </div>
    ${gradientRowHTML(setting)}
    `).join("");
}

const BOTTOMBAR_COLOR_SETTINGS = [
    {
        cls: "flockmodBottomBarBackgroundActive",
        cssVar: "--flockmod-custom-bottombar-background",
        toggleId: "themeModBottomBarBackgroundEnabled",
        inputId: "themeModUIBottomBarBackground",
        lsEnabled: "flockmodCustomBottomBarBackgroundEnabled",
        lsColor: "flockmodCustomBottomBarBackgroundColor",
        defaultColor: "#5a5960",
        name: "Bottom Bar Color",
        description: "Background of the bottom bar."
    },
    {
        cls: "flockmodBottomBarTextColorActive",
        cssVar: "--flockmod-custom-bottombar-text",
        toggleId: "themeModBottomBarTextColorEnabled",
        inputId: "themeModUIBottomBarTextColor",
        lsEnabled: "flockmodCustomBottomBarTextColorEnabled",
        lsColor: "flockmodCustomBottomBarTextColor",
        defaultColor: "#b4b6ba",
        name: "Button Text Color",
        description: "Bottom bar buttons, icons and text (including the mod menu button)."
    },
    {
        cls: "flockmodBottomBarHoverActive",
        cssVar: "--flockmod-custom-bottombar-hover",
        toggleId: "themeModBottomBarHoverEnabled",
        inputId: "themeModUIBottomBarHover",
        lsEnabled: "flockmodCustomBottomBarHoverEnabled",
        lsColor: "flockmodCustomBottomBarHoverColor",
        defaultColor: "#4b4a50",
        name: "Button Hover Color",
        description: "Background of bottom bar buttons when hovered."
    },
    {
        cls: "flockmodBottomBarSelectedActive",
        cssVar: "--flockmod-custom-bottombar-selected",
        toggleId: "themeModBottomBarSelectedEnabled",
        inputId: "themeModUIBottomBarSelected",
        lsEnabled: "flockmodCustomBottomBarSelectedEnabled",
        lsColor: "flockmodCustomBottomBarSelectedColor",
        defaultColor: "#999999",
        name: "Selected Button Color",
        description: "Background of a selected/active bottom bar button."
    }
];

const BAR_COLOR_SETTINGS = [
    ...TOPBAR_COLOR_SETTINGS,
    ...BOTTOMBAR_COLOR_SETTINGS
];


/* =========================================================
   GRADIENTS (Colors panel, detailed mode)
   A few big background colors can blend into a second color.
   The gradient starts from the setting's own color (through its
   CSS variable), so it follows the color picker live. Anything
   that needs a single color (borders, thumbs, fades) keeps using
   that first color. Gradients are only drawn in detailed mode.
   ========================================================= */

const GRADIENT_KEYS = {
    flockmodSidebarPrimaryActive: "SidebarPrimary",
    flockmodSidebarSecondaryActive: "SidebarSecondary",
    flockmodSidebarAccentActive: "SidebarAccent",
    flockmodTopBarBackgroundActive: "TopBarBackground",
    flockmodBottomBarBackgroundActive: "BottomBarBackground",
    flockmodPopupContentActive: "PopupContent",
    flockmodPopupTitleBarActive: "PopupTitleBar"
};

function getGradientInfo(setting) {
    const key = GRADIENT_KEYS[setting.cls];

    if (!key) {
        return null;
    }

    return {
        key,
        setting,
        cls: `flockmodGrad${key}Active`,
        gradVar: `--flockmod-grad-${key}`,
        lsEnabled: `flockmodCustomGrad${key}Enabled`,
        lsColor: `flockmodCustomGrad${key}Color`,
        lsAngle: `flockmodCustomGrad${key}Angle`,
        toggleId: `themeModGrad${key}Enabled`,
        inputId: `themeModGrad${key}Color`,
        angleId: `themeModGrad${key}Angle`,
        angleValueId: `themeModGrad${key}AngleValue`,
        defaultColor: liftHex(setting.defaultColor, 0.3),
        defaultAngle: 180
    };
}

function getAllGradientInfos() {
    return [...TOGGLE_COLOR_SETTINGS, ...BAR_COLOR_SETTINGS]
        .map(getGradientInfo)
        .filter(Boolean);
}

function angleLabel(angle) {
    return `${angle}°`;
}

function gradientRowHTML(setting) {
    const g = getGradientInfo(setting);

    if (!g) {
        return "";
    }

    return `
    <div class="themeModSetting themeModNoDivider themeModGradientRow">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                <i class="fas fa-level-up-alt fa-rotate-90"></i> Gradient
            </div>

            <div class="themeModSettingDescription">
                Blends ${setting.name} into a second color. The slider sets the direction.
            </div>
        </div>

        <div class="themeModGradientControls">
            <label class="themeModToggle">
                <input type="checkbox" id="${g.toggleId}">
                <span class="themeModToggleTrack">
                    <span class="themeModToggleOption themeModToggleOff">OFF</span>
                    <span class="themeModToggleOption themeModToggleOn">ON</span>
                    <span class="themeModToggleThumb"></span>
                </span>
            </label>

            <input type="color" id="${g.inputId}" value="${g.defaultColor}">

            <input type="range" id="${g.angleId}" class="themeModRange" min="0" max="360" step="15" value="${g.defaultAngle}">
            <span id="${g.angleValueId}" class="themeModRangeValue">${angleLabel(g.defaultAngle)}</span>
        </div>

    </div>
    `;
}

function getSavedGradient(g) {
    const angle = Number(localStorage.getItem(g.lsAngle));

    return {
        enabled: localStorage.getItem(g.lsEnabled) === "true",
        color: localStorage.getItem(g.lsColor) || g.defaultColor,
        angle: Number.isInteger(angle) && angle >= 0 && angle <= 360 && localStorage.getItem(g.lsAngle) !== null
            ? angle
            : g.defaultAngle
    };
}

/* Only the class and one variable change, so previews stay cheap */
function applyGradientPreview(g, enabled, color, angle) {
    const root = document.documentElement;

    root.classList.toggle(g.cls, Boolean(enabled) && !isSimpleModeSaved());
    root.style.setProperty(
        g.gradVar,
        `linear-gradient(${angle}deg, var(${g.setting.cssVar}), ${color})`
    );
}

function applySavedGradients() {
    getAllGradientInfos().forEach((g) => {
        const saved = getSavedGradient(g);
        applyGradientPreview(g, customizationsEnabled && saved.enabled, saved.color, saved.angle);
    });
}

function setupGradientControls(dialog) {
    const controls = getAllGradientInfos().map((g) => {
        const toggle = dialog.querySelector(`#${g.toggleId}`);
        const input = dialog.querySelector(`#${g.inputId}`);
        const angle = dialog.querySelector(`#${g.angleId}`);
        const angleValue = dialog.querySelector(`#${g.angleValueId}`);

        if (!toggle || !input || !angle) {
            return null;
        }

        const saved = getSavedGradient(g);
        toggle.checked = saved.enabled;
        input.value = saved.color;
        angle.value = String(saved.angle);
        angleValue.textContent = angleLabel(saved.angle);

        const preview = () => {
            angleValue.textContent = angleLabel(Number(angle.value));
            applyGradientPreview(g, customizationsEnabled && toggle.checked, input.value, Number(angle.value));
        };

        toggle.addEventListener("change", preview);
        input.addEventListener("input", preview);
        angle.addEventListener("input", preview);

        return { g, toggle, input, angle, angleValue, preview };
    }).filter(Boolean);

    /* Simple mode hides gradients; re-check when it's switched */
    const simpleToggle = dialog.querySelector("#themeModSimpleMode");

    if (simpleToggle) {
        simpleToggle.addEventListener("change", () => {
            controls.forEach((c) => c.preview());
        });
    }

    return {
        save() {
            controls.forEach(({ g, toggle, input, angle }) => {
                localStorage.setItem(g.lsEnabled, toggle.checked);
                localStorage.setItem(g.lsColor, input.value);
                localStorage.setItem(g.lsAngle, angle.value);
            });
        },
        reset() {
            controls.forEach(({ g, toggle, input, angle, preview }) => {
                toggle.checked = false;
                input.value = g.defaultColor;
                angle.value = String(g.defaultAngle);
                localStorage.setItem(g.lsEnabled, "false");
                localStorage.setItem(g.lsColor, g.defaultColor);
                localStorage.setItem(g.lsAngle, String(g.defaultAngle));
                preview();
            });
        }
    };
}

function buildBottomBarColorRowsHTML() {
    return BOTTOMBAR_COLOR_SETTINGS.map((setting) => `
    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                ${setting.name}
            </div>

            <div class="themeModSettingDescription">
                ${setting.description}
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="${setting.toggleId}">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="${setting.inputId}" value="${setting.defaultColor}">

    </div>
    ${gradientRowHTML(setting)}
    `).join("");
}

/* =========================================================
   SIMPLE COLORING
   A handful of main colors that fill in the detailed ones.
   Saved separately from the detailed settings, so switching
   modes never erases a detailed theme.
   ========================================================= */

const SIMPLE_MODE_LS = "flockmodSimpleColoringEnabled";

const SIMPLE_COLOR_SETTINGS = [
    {
        key: "background",
        toggleId: "themeModSimpleBackgroundEnabled",
        inputId: "themeModUISimpleBackground",
        lsEnabled: "flockmodSimpleBackgroundEnabled",
        lsColor: "flockmodSimpleBackgroundColor",
        defaultColor: "#1d1e22",
        name: "Background",
        description: "Sidebar background, top bar, bottom bar, popup windows, menus and the chat channel list."
    },
    {
        key: "surface",
        toggleId: "themeModSimpleSurfaceEnabled",
        inputId: "themeModUISimpleSurface",
        lsEnabled: "flockmodSimpleSurfaceEnabled",
        lsColor: "flockmodSimpleSurfaceColor",
        defaultColor: "#2f3136",
        name: "Surface",
        description: "Section boxes, unselected layers, dropdowns, collapsers, bar button hovers, the activity bar, plus popup content, title bars, fields, buttons and borders."
    },
    {
        key: "accent",
        toggleId: "themeModSimpleAccentEnabled",
        inputId: "themeModUISimpleAccent",
        lsEnabled: "flockmodSimpleAccentEnabled",
        lsColor: "flockmodSimpleAccentColor",
        defaultColor: "#378de4",
        name: "Accent",
        description: "Selected states, slider fills, switches, progress bar. Hover is made from it automatically."
    },
    {
        key: "text",
        toggleId: "themeModSimpleTextEnabled",
        inputId: "themeModUISimpleText",
        lsEnabled: "flockmodSimpleTextEnabled",
        lsColor: "flockmodSimpleTextColor",
        defaultColor: "#ffffff",
        name: "Text",
        description: "Headings, bar text, popup titles, buttons and chat messages. Smaller text, timestamps and system messages use softer versions."
    },
    {
        key: "icons",
        toggleId: "themeModSimpleIconsEnabled",
        inputId: "themeModUISimpleIcons",
        lsEnabled: "flockmodSimpleIconsEnabled",
        lsColor: "flockmodSimpleIconsColor",
        defaultColor: "#acb3ba",
        name: "Icons",
        description: "Sidebar icons, grippers, tool icons and the color switch button."
    }
];

function isSimpleModeSaved() {
    return localStorage.getItem(SIMPLE_MODE_LS) === "true";
}

function getSavedSimpleValues() {
    const values = {};

    SIMPLE_COLOR_SETTINGS.forEach((setting) => {
        values[setting.key] = {
            enabled: localStorage.getItem(setting.lsEnabled) === "true",
            color: localStorage.getItem(setting.lsColor) || setting.defaultColor
        };
    });

    return values;
}

/* Small color helpers used to make the "derived" shades */

function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHex(rgb) {
    return "#" + rgb
        .map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0"))
        .join("");
}

function mixHex(a, b, amount) {
    const A = hexToRgb(a);
    const B = hexToRgb(b);
    return rgbToHex(A.map((v, i) => v + (B[i] - v) * amount));
}

function isDarkHex(hex) {
    const [r, g, b] = hexToRgb(hex);
    return (0.299 * r + 0.587 * g + 0.114 * b) < 140;
}

/* Nudges a color away from itself: lighter on dark colors,
   darker on light colors — so it works for light themes too. */
function liftHex(hex, amount) {
    return mixHex(hex, isDarkHex(hex) ? "#ffffff" : "#000000", amount);
}

function setColorTarget(cls, cssVar, enabled, color) {
    document.documentElement.classList.toggle(cls, enabled);
    document.documentElement.style.setProperty(cssVar, color);
}

/* sink: optional (cls, cssVar, enabled, color) callback. Without it
   the colors are applied to the page; with it they are only reported
   (used by "Copy to detailed"). */
function applySimpleColors(values, sink) {
    const set = sink || setColorTarget;
    const bg = values.background;
    const sf = values.surface;
    const ac = values.accent;
    const tx = values.text;
    const ic = values.icons;

    const bgColor = bg.enabled ? bg.color : "#1d1e22";
    const surfaceColor = sf.enabled ? sf.color : "#2f3136";

    /* Background */
    set("flockmodSidebarPrimaryActive", "--flockmod-custom-sidebar-primary", bg.enabled, bg.color);
    set("flockmodTopBarBackgroundActive", "--flockmod-custom-topbar-background", bg.enabled, bg.color);
    set("flockmodBottomBarBackgroundActive", "--flockmod-custom-bottombar-background", bg.enabled, bg.color);

    /* Surface */
    set("flockmodSidebarSecondaryActive", "--flockmod-custom-sidebar-secondary", sf.enabled, sf.color);
    set("flockmodSidebarInactiveActive", "--flockmod-custom-sidebar-inactive", sf.enabled, liftHex(surfaceColor, 0.08));
    set("flockmodSidebarCollapserActive", "--flockmod-custom-sidebar-collapser", sf.enabled, liftHex(surfaceColor, 0.15));
    set("flockmodTopBarHoverActive", "--flockmod-custom-topbar-hover", sf.enabled, sf.color);
    set("flockmodBottomBarHoverActive", "--flockmod-custom-bottombar-hover", sf.enabled, sf.color);
    set("flockmodTopBarActivityActive", "--flockmod-custom-topbar-activity", sf.enabled, sf.color);

    /* Accent (+ hover made from it) */
    set("flockmodSidebarAccentActive", "--flockmod-custom-sidebar-accent", ac.enabled, ac.color);
    set("flockmodTopBarProgressActive", "--flockmod-custom-topbar-progress", ac.enabled, ac.color);
    set("flockmodBottomBarSelectedActive", "--flockmod-custom-bottombar-selected", ac.enabled, ac.color);

    /* Accent OFF in simple mode = native selected/hover states */
    set("flockmodSelectedColorActive", "--flockmod-custom-selected", ac.enabled, ac.enabled ? ac.color : "#4f5156");
    set("flockmodHoverColorActive", "--flockmod-custom-hover", ac.enabled, ac.enabled ? mixHex(ac.color, surfaceColor, 0.6) : "#4f5156");

    /* Text (small text = a softer version) */
    const softText = mixHex(tx.color, bgColor, 0.25);

    set("flockmodText1ColorActive", "--flockmod-custom-text1", tx.enabled, tx.color);
    set("flockmodText2ColorActive", "--flockmod-custom-text2", tx.enabled, softText);
    set("flockmodTopBarTextColorActive", "--flockmod-custom-topbar-text", tx.enabled, tx.color);
    set("flockmodTopBarBrandActive", "--flockmod-custom-topbar-brand", tx.enabled, tx.color);
    set("flockmodBottomBarTextColorActive", "--flockmod-custom-bottombar-text", tx.enabled, softText);

    /* Popups & Menus */
    set("flockmodPopupBackgroundActive", "--flockmod-custom-popup-background", bg.enabled, bg.color);
    set("flockmodPopupContentActive", "--flockmod-custom-popup-content", sf.enabled, sf.color);
    set("flockmodPopupTitleBarActive", "--flockmod-custom-popup-titlebar", sf.enabled, liftHex(surfaceColor, 0.15));
    set("flockmodPopupBorderActive", "--flockmod-custom-popup-border", sf.enabled, liftHex(surfaceColor, 0.3));
    set("flockmodPopupFieldActive", "--flockmod-custom-popup-field", sf.enabled, liftHex(surfaceColor, 0.08));
    set("flockmodPopupButtonActive", "--flockmod-custom-popup-button", sf.enabled, liftHex(surfaceColor, 0.25));
    set("flockmodPopupTitleTextActive", "--flockmod-custom-popup-titletext", tx.enabled, tx.color);
    set("flockmodPopupButtonTextActive", "--flockmod-custom-popup-buttontext", tx.enabled, tx.color);

    /* Chat (usernames are never touched) */
    set("flockmodChatChannelsActive", "--flockmod-custom-chat-channels", bg.enabled, bg.color);
    set("flockmodChatMessageActive", "--flockmod-custom-chat-message", tx.enabled, tx.color);
    set("flockmodChatEventActive", "--flockmod-custom-chat-event", tx.enabled, mixHex(tx.color, bgColor, 0.5));
    set("flockmodChatTimestampActive", "--flockmod-custom-chat-timestamp", tx.enabled, mixHex(tx.color, bgColor, 0.45));

    /* Icons */
    set("flockmodSidebarIconActive", "--flockmod-custom-sidebar-icon", ic.enabled, ic.color);
}

function applySavedSimpleColorsIfActive() {
    if (customizationsEnabled && isSimpleModeSaved()) {
        applySimpleColors(getSavedSimpleValues());
    }
}

function buildSimpleColorRowsHTML() {
    return SIMPLE_COLOR_SETTINGS.map((setting) => `
    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                ${setting.name}
            </div>

            <div class="themeModSettingDescription">
                ${setting.description}
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="${setting.toggleId}">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="${setting.inputId}" value="${setting.defaultColor}">

    </div>
    ${gradientRowHTML(setting)}
    `).join("");
}

    /* Each Interface setting only takes over FlockMod's own sizes
       while it's moved off its default (100% / Regular / 5px). */
    function setInterfaceActive(cls, active) {
        document.documentElement.classList.toggle(cls, Boolean(active));
    }

    function applyFontSizePreview(size) {
        const numericSize = Number(size);

        setInterfaceActive("flockmodFontSizeActive", Number.isFinite(numericSize) && numericSize !== 100);

        if (
            Number.isFinite(numericSize) &&
            numericSize >= 90 &&
            numericSize <= 110
        ) {
            document.documentElement.style.setProperty(
                "--flockmod-custom-ui-font-size",
                String(numericSize / 100)
            );
        } else {
            document.documentElement.style.removeProperty(
                "--flockmod-custom-ui-font-size"
            );
        }
    }

    function applyFontWeightPreview(weight) {
        setInterfaceActive("flockmodFontWeightActive", ["medium", "semibold", "bold"].includes(weight));

        if (weight === "medium") {
            document.documentElement.style.setProperty(
                "--flockmod-custom-ui-font-weight",
                "500"
            );
        } else if (weight === "semibold") {
            document.documentElement.style.setProperty(
                "--flockmod-custom-ui-font-weight",
                "600"
            );
        } else if (weight === "bold") {
            document.documentElement.style.setProperty(
                "--flockmod-custom-ui-font-weight",
                "700"
            );
        } else {
            document.documentElement.style.removeProperty(
                "--flockmod-custom-ui-font-weight"
            );
        }
    }

    function applySpacingPreview(spacing) {
        const numericSpacing = Number(spacing);

        setInterfaceActive("flockmodSpacingActive", Number.isFinite(numericSpacing) && numericSpacing !== 100);

        if (
            Number.isFinite(numericSpacing) &&
            numericSpacing >= 75 &&
            numericSpacing <= 125
        ) {
            document.documentElement.style.setProperty(
                "--flockmod-ui-spacing",
                String(numericSpacing / 100)
            );
        } else {
            document.documentElement.style.removeProperty(
                "--flockmod-ui-spacing"
            );
        }
    }

    function radiusLabel(radius) {
        return Number(radius) === 5 ? "Default" : `${radius}px`;
    }

    function applyRadiusPreview(radius) {
    const numericRadius = Number(radius);

        setInterfaceActive("flockmodRadiusActive", Number.isFinite(numericRadius) && numericRadius !== 5);

        if (
         Number.isFinite(numericRadius) &&
         numericRadius >= 0 &&
         numericRadius <= 12
        ) {
            document.documentElement.style.setProperty(
             "--flockmod-ui-radius",
             `${numericRadius}px`
            );
        } else {
            document.documentElement.style.removeProperty(
             "--flockmod-ui-radius"
            );
        }
    }

    /* Selected / Hover were always on before they had toggles,
       so "never saved" counts as ON to keep existing setups the same. */
    function isSavedOnByDefault(key) {
        const value = localStorage.getItem(key);
        return value === null ? true : value === "true";
    }

    function applySelectedEnabledPreview(enabled) {
        document.documentElement.classList.toggle("flockmodSelectedColorActive", enabled);
    }

    function applyHoverEnabledPreview(enabled) {
        document.documentElement.classList.toggle("flockmodHoverColorActive", enabled);
    }

    function applySelectedColorPreview(color) {
        document.documentElement.style.setProperty(
            "--flockmod-custom-selected",
            color
        );
    }

    function applyHoverColorPreview(color) {
        document.documentElement.style.setProperty(
            "--flockmod-custom-hover",
            color
        );
    }

    function applyText1ColorEnabledPreview(enabled) {
        document.documentElement.classList.toggle(
            "flockmodText1ColorActive",
            enabled
        );
    }

    function applyText1ColorPreview(color) {
        document.documentElement.style.setProperty(
            "--flockmod-custom-text1",
            color
        );
    }

    function applyText2ColorEnabledPreview(enabled) {
        document.documentElement.classList.toggle(
            "flockmodText2ColorActive",
            enabled
        );
    }

    function applyText2ColorPreview(color) {
        document.documentElement.style.setProperty(
            "--flockmod-custom-text2",
            color
        );
    }


    /* =========================================================
       CUSTOM FONTS
       ---------------------------------------------------------
       Font values (saved as flockmodCustomUIFont and in theme codes):
         "default"             FlockMod's own font
         "Arial" / "Georgia"…  built-in system fonts
         "google:Name"         a Google Fonts family, fetched by name
         "upload:Name"         a font file the user uploaded
       Fonts are always loaded as raw bytes -> FontFace, not with a
       <link>/url(), so FlockMod's security rules can't block them.
       Uploaded files live in this site's IndexedDB (no extension
       permission needed). The list of added fonts is in
       localStorage (flockmodFontLibrary).
       ========================================================= */

    /* =========================================================
       BACKGROUND IMAGES (Backgrounds tab)
       ---------------------------------------------------------
       Images are stored in this site's IndexedDB (like uploaded
       fonts) and never leave the browser. The look settings
       (fit, shade, dim, blur, see-through) are normal settings,
       so they are included in theme codes; the image is not.

       See-through sections: FlockMod's panel colors are hardcoded
       per theme, so we read each panel's current color
       (refreshSeeThrough) into --fmst-* variables, and the CSS
       mixes that color with transparency.
       ========================================================= */

    const BG_DB_NAME = "flockmodThemeModImages";
    const BG_DB_STORE = "images";
    const MAX_BG_UPLOAD_BYTES = 25 * 1024 * 1024;
    const MAX_GIF_BYTES = 8 * 1024 * 1024;
    const BG_MAX_SIDE = 1920;

    const BACKGROUND_PLACES = [
        {
            key: "sidebar",
            label: "Sidebar",
            ls: "flockmodBgSidebar",
            idPart: "Sidebar",
            cls: "flockmodBgSidebarActive",
            seeCls: "flockmodBgSidebarSeeThroughActive",
            cssVar: "--flockmod-bg-sidebar",
            imageText: "Shown behind the whole sidebar.",
            seeText: "Lets the image show through the section boxes, layer rows, user list rows and tool strip.",
            /* id, how to find one to read its color */
            see: [
                { id: "sbContent", detect: "#sidebar .boxBgContainer .containerContent" },
                { id: "sbFooter", detect: "#sidebar .containerSidebar .containerFooter" },
                { id: "sbLayers", detect: "#sidebar .os-content:has(> #previewList)" },
                { id: "sbNav", detect: "#sidebar .sidebarNavbar" },
                { id: "sbTools", detect: ".toolbar:has(> #drawingTools)" },
                { id: "sbLayerRow", detect: "#sidebar .layerPreview:not(.selectedLayer):not(:hover)" },
                { id: "sbRowOdd", detect: "#sidebar :is(tr.someoneelse, tr.myself):nth-child(odd):not(.selected):not(:hover)" },
                { id: "sbRowOddTd", detect: "#sidebar :is(tr.someoneelse, tr.myself):nth-child(odd):not(.selected):not(:hover) > td" },
                { id: "sbRowEven", detect: "#sidebar :is(tr.someoneelse, tr.myself):nth-child(even):not(.selected):not(:hover)" },
                { id: "sbRowEvenTd", detect: "#sidebar :is(tr.someoneelse, tr.myself):nth-child(even):not(.selected):not(:hover) > td" }
            ]
        },
        {
            key: "chat",
            label: "Chat",
            ls: "flockmodBgChat",
            idPart: "Chat",
            cls: "flockmodBgChatActive",
            seeCls: "flockmodBgChatSeeThroughActive",
            cssVar: "--flockmod-bg-chat",
            imageText: "Shown behind the chat window (messages and channel list).",
            seeText: "Lets the image show through the main message area.",
            sideName: "Channel List",
            sideText: "Lets the image show through the channel list on the left.",
            see: [
                { id: "chContent", detect: '.dialog[name="chat"] .dynamicDialogArea' },
                { id: "chChannels", detect: '.dialog[name="chat"] .sidebar' },
                { id: "chBar", detect: '.dialog[name="chat"] .chatBar' }
            ]
        },
        {
            key: "messenger",
            label: "Messenger",
            ls: "flockmodBgMessenger",
            idPart: "Messenger",
            cls: "flockmodBgMessengerActive",
            seeCls: "flockmodBgMessengerSeeThroughActive",
            cssVar: "--flockmod-bg-messenger",
            imageText: "Shown behind the Messenger window (conversation and contact list).",
            seeText: "Lets the image show through the conversation area.",
            sideName: "Contact List",
            sideText: "Lets the image show through the contact list on the left.",
            see: [
                { id: "msContent", detect: '.dialog[name="messenger"] .dynamicDialogArea' },
                { id: "msSide", detect: '.dialog[name="messenger"] .sidebar' },
                { id: "msBar", detect: '.dialog[name="messenger"] .messengerSideBar' },
                { id: "msUser", detect: '.dialog[name="messenger"] .messengerUser:not(.selected):not(:hover)' }
            ]
        }
    ];

    /* Settings per place (key suffix, type, default, extra) */
    const BG_FIELD_DEFS = [
        ["Enabled", "bool", false],
        ["Fit", "enum", "cover", { choices: ["cover", "contain", "tile"] }],
        ["Shade", "enum", "dark", { choices: ["dark", "light"] }],
        ["Dim", "int", 30, { min: 0, max: 90 }],
        ["Blur", "int", 0, { min: 0, max: 20 }],
        ["SeeThrough", "int", 0, { min: 0, max: 100 }],
        /* Chat only: the channel list gets its own see-through */
        ["ChannelSeeThrough", "int", 0, { min: 0, max: 100, only: ["chat", "messenger"] }]
    ];

    function bgFieldsFor(place) {
        return BG_FIELD_DEFS.filter(([, , , extra]) => !extra || !extra.only || extra.only.includes(place.key));
    }

    function bgLsKey(place, suffix) {
        return place.ls + suffix;
    }

    function readBgSettings(place) {
        const out = {};

        bgFieldsFor(place).forEach(([suffix, type, def, extra]) => {
            const raw = localStorage.getItem(bgLsKey(place, suffix));
            let value = def;

            if (raw !== null) {
                if (type === "bool") {
                    value = raw === "true";
                } else if (type === "int") {
                    const n = Number(raw);
                    value = Number.isInteger(n) && n >= extra.min && n <= extra.max ? n : def;
                } else {
                    value = extra.choices.includes(raw) ? raw : def;
                }
            }

            out[suffix] = value;
        });

        return out;
    }

    /* ---- IndexedDB ---- */

    function openBgDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(BG_DB_NAME, 1);
            request.onupgradeneeded = () => request.result.createObjectStore(BG_DB_STORE);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async function bgDB(mode, action) {
        const db = await openBgDB();

        return new Promise((resolve, reject) => {
            const tx = db.transaction(BG_DB_STORE, mode);
            const request = action(tx.objectStore(BG_DB_STORE));
            tx.oncomplete = () => { db.close(); resolve(request && request.result); };
            tx.onerror = () => { db.close(); reject(tx.error); };
        });
    }

    /* In-memory copy so sliders don't hit the database every tick */
    const bgBlobCache = new Map();   /* key -> Blob | null */
    const bgDisplay = new Map();     /* key -> { cacheKey, url } */
    const bgApplyToken = new Map();

    async function getBgBlob(key) {
        if (!bgBlobCache.has(key)) {
            try {
                bgBlobCache.set(key, (await bgDB("readonly", (s) => s.get(key))) || null);
            } catch (error) {
                bgBlobCache.set(key, null);
            }
        }

        return bgBlobCache.get(key);
    }

    async function setBgBlob(key, blob) {
        await bgDB("readwrite", (s) => (blob ? s.put(blob, key) : s.delete(key)));
        bgBlobCache.set(key, blob || null);
        forgetBgDisplay(key);
    }

    function forgetBgDisplay(key) {
        const shown = bgDisplay.get(key);

        if (shown && shown.url.startsWith("blob:")) {
            URL.revokeObjectURL(shown.url);
        }

        bgDisplay.delete(key);
    }

    function canvasToBlob(canvas, type, quality) {
        return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
    }

    /* Shrinks big uploads so they stay fast and small. GIFs are kept
       as-is so they keep animating. */
    async function prepareBgImage(file) {
        if (!/^image\//.test(file.type)) {
            throw new Error("That file isn't an image.");
        }

        if (file.type === "image/gif") {
            if (file.size > MAX_GIF_BYTES) {
                throw new Error("That GIF is too big (8 MB max).");
            }
            return file;
        }

        if (file.size > MAX_BG_UPLOAD_BYTES) {
            throw new Error("That image is too big (25 MB max).");
        }

        let bitmap;

        try {
            bitmap = await createImageBitmap(file);
        } catch (error) {
            throw new Error("That image couldn't be read.");
        }

        const scale = Math.min(1, BG_MAX_SIDE / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(bitmap.width * scale));
        canvas.height = Math.max(1, Math.round(bitmap.height * scale));
        canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();

        return (await canvasToBlob(canvas, "image/webp", 0.88)) ||
               (await canvasToBlob(canvas, "image/jpeg", 0.88));
    }

    /* Bakes the blur into a copy of the image (cheaper than a live
       CSS blur filter). Rendered smaller, since blur hides detail. */
    async function blurBgImage(blob, px) {
        const bitmap = await createImageBitmap(blob);
        const scale = Math.min(1, 960 / Math.max(bitmap.width, bitmap.height));
        const w = Math.max(1, Math.round(bitmap.width * scale));
        const h = Math.max(1, Math.round(bitmap.height * scale));
        const blur = px * scale * 1.5;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext("2d");
        ctx.filter = `blur(${blur}px)`;
        /* Draw a bit larger so the edges don't blur into transparency */
        const pad = blur * 2;
        ctx.drawImage(bitmap, -pad, -pad, w + pad * 2, h + pad * 2);
        bitmap.close();

        return canvasToBlob(canvas, "image/jpeg", 0.85);
    }

    function blobToDataURL(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(blob);
        });
    }

    function canLoadImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    }

    let bgUseDataURLs = false;

    async function getBgDisplayURL(key, blob, blur) {
        const isGif = blob.type === "image/gif";
        const cacheKey = `${blob.size}|${blob.type}|${isGif ? 0 : blur}`;
        const shown = bgDisplay.get(key);

        if (shown && shown.cacheKey === cacheKey) {
            return shown.url;
        }

        const source = !isGif && blur > 0 ? await blurBgImage(blob, blur) : blob;
        let url;

        /* blob: URLs are lightest; if the site blocks them, fall back */
        if (!bgUseDataURLs) {
            url = URL.createObjectURL(source);

            if (!(await canLoadImage(url))) {
                URL.revokeObjectURL(url);
                bgUseDataURLs = true;
                url = null;
            }
        }

        if (!url) {
            url = await blobToDataURL(source);
        }

        forgetBgDisplay(key);
        bgDisplay.set(key, { cacheKey, url });
        return url;
    }

    /* Applies one place's background from a settings object */
    async function applyBackgroundState(place, st) {
        const root = document.documentElement;
        const token = (bgApplyToken.get(place.key) || 0) + 1;
        bgApplyToken.set(place.key, token);

        root.style.setProperty(`${place.cssVar}-size`, st.Fit === "tile" ? "auto" : st.Fit);
        root.style.setProperty(`${place.cssVar}-repeat`, st.Fit === "tile" ? "repeat" : "no-repeat");
        root.style.setProperty(`${place.cssVar}-shade`, st.Shade === "light" ? "255, 255, 255" : "0, 0, 0");
        root.style.setProperty(`${place.cssVar}-dim`, String(st.Dim / 100));
        root.style.setProperty(`${place.cssVar}-see`, String(st.SeeThrough));
        root.style.setProperty(`${place.cssVar}-see-channels`, String(st.ChannelSeeThrough || 0));

        const blob = st.Enabled ? await getBgBlob(place.key) : null;
        let url = null;

        if (blob) {
            try {
                url = await getBgDisplayURL(place.key, blob, st.Blur);
            } catch (error) {
                url = null;
            }
        }

        /* A newer call happened while we were loading */
        if (bgApplyToken.get(place.key) !== token) {
            return;
        }

        if (url) {
            root.style.setProperty(`${place.cssVar}-image`, `url("${url}")`);
        } else {
            root.style.removeProperty(`${place.cssVar}-image`);
        }

        root.classList.toggle(place.cls, Boolean(url));
        root.classList.toggle(place.seeCls, Boolean(url) && (st.SeeThrough > 0 || (st.ChannelSeeThrough || 0) > 0));
        refreshSeeThrough();
    }

    function applySavedBackgrounds() {
        BACKGROUND_PLACES.forEach((place) => {
            applyBackgroundState(place, readBgSettings(place));
        });
    }

    /* Reads each panel's real color (with see-through switched off
       for an instant, so nothing flickers) */
    function refreshSeeThrough() {
        const root = document.documentElement;

        BACKGROUND_PLACES.forEach((place) => {
            if (!root.classList.contains(place.seeCls)) {
                return;
            }

            root.classList.remove(place.seeCls);
            place.detected = place.detected || new Set();

            place.see.forEach((target) => {
                const el = document.querySelector(target.detect);

                if (el) {
                    root.style.setProperty(`--fmst-${target.id}`, getComputedStyle(el).backgroundColor);
                    place.detected.add(target.id);
                }
            });

            root.classList.add(place.seeCls);
        });
    }

    /* Some panels only exist later (chat window, user list rows).
       Cheap check, run from the existing 500 ms loop. */
    function checkSeeThroughTargets() {
        const root = document.documentElement;

        const missing = BACKGROUND_PLACES.some((place) =>
            root.classList.contains(place.seeCls) &&
            place.see.some((t) => !(place.detected && place.detected.has(t.id)) && document.querySelector(t.detect))
        );

        if (missing) {
            refreshSeeThrough();
        }
    }

    function buildBackgroundRowsHTML() {
        const range = (id, name, desc, min, max, unit) => `
            <div class="themeModSetting themeModNoDivider">
                <div class="themeModSettingText">
                    <div class="themeModSettingName">${name}</div>
                    <div class="themeModSettingDescription">${desc}</div>
                </div>
                <div class="themeModRangeControl">
                    <input type="range" id="${id}" class="themeModRange" min="${min}" max="${max}" step="1" value="${min}">
                    <span class="themeModRangeValue" data-unit="${unit}"></span>
                </div>
            </div>`;

        const select = (id, name, desc, options) => `
            <div class="themeModSetting themeModNoDivider">
                <div class="themeModSettingText">
                    <div class="themeModSettingName">${name}</div>
                    <div class="themeModSettingDescription">${desc}</div>
                </div>
                <select id="${id}" class="themeModSelect">
                    ${options.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}
                </select>
            </div>`;

        return BACKGROUND_PLACES.map((place, index) => {
            const p = `themeModBg${place.idPart}`;

            return `
            <div class="themeModSubsectionTitle ${index ? "themeModSpacingSubsection" : ""}">
                ${place.label}
            </div>

            <div class="themeModSetting themeModNoDivider">
                <div class="themeModSettingText">
                    <div class="themeModSettingName">${place.label} Background Image</div>
                    <div class="themeModSettingDescription">${place.imageText}</div>
                </div>

                <label class="themeModToggle" style="margin-right: 10px;">
                    <input type="checkbox" id="${p}Enabled">
                    <span class="themeModToggleTrack">
                        <span class="themeModToggleOption themeModToggleOff">OFF</span>
                        <span class="themeModToggleOption themeModToggleOn">ON</span>
                        <span class="themeModToggleThumb"></span>
                    </span>
                </label>

                <div class="themeModBgThumb" data-bg-thumb="${place.key}" title="No image yet"></div>
            </div>

            <div class="themeModBgButtons">
                <button type="button" class="themeModButton" data-bg-upload="${place.key}">
                    <i class="fas fa-image"></i> Upload image
                </button>
                <button type="button" class="themeModButton themeModDangerButton" data-bg-remove="${place.key}">
                    Remove image
                </button>
                <input type="file" accept="image/*" data-bg-file="${place.key}" style="display: none;">
            </div>

            <div class="themeModBgStatus" data-bg-status="${place.key}" style="display: none;"></div>

            ${select(`${p}Fit`, "Fit", "Fill covers the whole area, Fit shows the whole image, Tile repeats it.",
                [["cover", "Fill"], ["contain", "Fit"], ["tile", "Tile"]])}
            ${select(`${p}Shade`, "Shade", "Darken for dark themes, lighten for light ones.",
                [["dark", "Darken"], ["light", "Lighten"]])}
            ${range(`${p}Dim`, "Shade Amount", "How much to darken/lighten the image so text stays readable.", 0, 90, "%")}
            ${range(`${p}Blur`, "Blur", "Softens the image. (Animated GIFs aren't blurred, so they keep moving.)", 0, 20, "px")}
            ${place.key === "sidebar"
                ? range(`${p}SeeThrough`, "See-through Sections", place.seeText, 0, 100, "%")
                : range(`${p}SeeThrough`, "See-through Message Area", place.seeText, 0, 100, "%") +
                  range(`${p}ChannelSeeThrough`, `See-through ${place.sideName}`, place.sideText, 0, 100, "%")}
            `;
        }).join("");
    }

    function setupBackgroundsPanel(dialog) {
        const panel = dialog.querySelector('[data-theme-panel="backgrounds"]');

        if (!panel) {
            return;
        }

        const controls = BACKGROUND_PLACES.map((place) => {
            const p = `themeModBg${place.idPart}`;
            const inputs = {};

            bgFieldsFor(place).forEach(([suffix]) => {
                inputs[suffix] = dialog.querySelector(`#${p}${suffix}`);
            });

            return {
                place,
                inputs,
                thumb: panel.querySelector(`[data-bg-thumb="${place.key}"]`),
                status: panel.querySelector(`[data-bg-status="${place.key}"]`),
                file: panel.querySelector(`[data-bg-file="${place.key}"]`)
            };
        });

        function readInputs(c) {
            const st = {};

            bgFieldsFor(c.place).forEach(([suffix, type]) => {
                const input = c.inputs[suffix];
                st[suffix] = type === "bool" ? input.checked : type === "int" ? Number(input.value) : input.value;
            });

            return st;
        }

        function writeInputs(c, st) {
            bgFieldsFor(c.place).forEach(([suffix, type]) => {
                const input = c.inputs[suffix];

                if (type === "bool") {
                    input.checked = st[suffix];
                } else {
                    input.value = String(st[suffix]);
                }
            });

            updateRangeLabels(c);
        }

        function updateRangeLabels(c) {
            ["Dim", "Blur", "SeeThrough", "ChannelSeeThrough"].forEach((suffix) => {
                const input = c.inputs[suffix];

                if (!input) {
                    return;
                }

                const label = input.parentElement.querySelector(".themeModRangeValue");
                label.textContent = `${input.value}${label.dataset.unit}`;
            });
        }

        function showStatus(c, message, kind = "ok") {
            c.status.textContent = message;
            c.status.dataset.kind = kind;
            c.status.style.display = message ? "block" : "none";
        }

        async function updateThumb(c) {
            const blob = await getBgBlob(c.place.key);

            if (blob) {
                const url = await getBgDisplayURL(c.place.key, blob, readInputs(c).Blur);
                c.thumb.style.backgroundImage = `url("${url}")`;
                c.thumb.classList.add("hasImage");
                c.thumb.title = "Current image";
            } else {
                c.thumb.style.backgroundImage = "";
                c.thumb.classList.remove("hasImage");
                c.thumb.title = "No image yet";
            }
        }

        /* Blur re-renders the image, so wait until the slider rests */
        let previewTimer = null;

        function preview(c, soon) {
            updateRangeLabels(c);
            clearTimeout(previewTimer);

            const run = () => {
                applyBackgroundState(c.place, readInputs(c)).then(() => updateThumb(c));
            };

            if (soon) {
                previewTimer = setTimeout(run, 120);
            } else {
                run();
            }
        }

        controls.forEach((c) => {
            writeInputs(c, readBgSettings(c.place));
            updateThumb(c);

            Object.entries(c.inputs).forEach(([suffix, input]) => {
                input.addEventListener(input.type === "range" ? "input" : "change", () => {
                    preview(c, suffix === "Blur");
                });
            });

            panel.querySelector(`[data-bg-upload="${c.place.key}"]`).addEventListener("click", () => c.file.click());

            c.file.addEventListener("change", async () => {
                const file = c.file.files && c.file.files[0];
                c.file.value = "";

                if (!file) {
                    return;
                }

                showStatus(c, "Preparing image...");

                try {
                    const blob = await prepareBgImage(file);
                    await setBgBlob(c.place.key, blob);
                    c.inputs.Enabled.checked = true;
                    preview(c);
                    showStatus(c, "Image added! Adjust it below, then press Apply Changes.");
                } catch (error) {
                    showStatus(c, error.message || "That image couldn't be used.", "error");
                }
            });

            panel.querySelector(`[data-bg-remove="${c.place.key}"]`).addEventListener("click", async () => {
                await setBgBlob(c.place.key, null);
                c.inputs.Enabled.checked = false;
                preview(c);
                showStatus(c, "Image removed. Press Apply Changes to save the rest.");
            });
        });

        dialog.querySelector(".themeModApplyButton").addEventListener("click", () => {
            controls.forEach((c) => {
                const st = readInputs(c);
                bgFieldsFor(c.place).forEach(([suffix]) => {
                    localStorage.setItem(bgLsKey(c.place, suffix), String(st[suffix]));
                });
            });
        });

        dialog.querySelector(".themeModResetButton").addEventListener("click", () => {
            controls.forEach((c) => {
                const defaults = {};
                bgFieldsFor(c.place).forEach(([suffix, , def]) => {
                    defaults[suffix] = def;
                    localStorage.setItem(bgLsKey(c.place, suffix), String(def));
                });
                writeInputs(c, defaults);
                preview(c);
            });
        });

        dialog.querySelector(".closeButton").addEventListener("click", () => {
            applySavedBackgrounds();
        });

        /* Changing a color while see-through is on: re-read panel colors */
        let seeQueued = false;
        const queueSee = () => {
            if (!seeQueued) {
                seeQueued = true;
                requestAnimationFrame(() => {
                    seeQueued = false;
                    refreshSeeThrough();
                });
            }
        };

        dialog.addEventListener("input", queueSee);
        dialog.addEventListener("change", queueSee);
    }

    /* =========================================================
       SLIDER THUMB SHAPES (Interface > Slider Thumbs)
       The thumb is masked into a shape (keeps its color and the
       number inside). "contain" keeps the shape's proportions.
       OFF = normal thumbs, which Border Radius still rounds.
       ========================================================= */

    const THUMB_SHAPE_ENABLED_LS = "flockmodCustomThumbShapeEnabled";
    const THUMB_SHAPE_LS = "flockmodCustomThumbShape";
    const THUMB_SHAPE_SIZE_LS = "flockmodCustomThumbShapeSize";

    const THUMB_SHAPES = {
        circle: { label: "Circle", svg: '<circle cx="50" cy="50" r="50"/>' },
        heart: {
            label: "Heart",
            svg: '<path d="M50 94 C22 72 2 54 2 32 C2 15 15 4 29 4 C39 4 46 10 50 18 C54 10 61 4 71 4 C85 4 98 15 98 32 C98 54 78 72 50 94Z"/>'
        },
        star: { label: "Star", svg: '<polygon points="50,2 62,36 98,36 69,58 80,94 50,72 20,94 31,58 2,36 38,36"/>' },
        diamond: { label: "Diamond", svg: '<polygon points="50,0 100,50 50,100 0,50"/>' },
        flower: {
            label: "Flower",
            svg: '<g transform="translate(50 50)">' +
                [0, 72, 144, 216, 288].map((deg) =>
                    `<ellipse cx="0" cy="-24" rx="19" ry="26" transform="rotate(${deg})"/>`
                ).join("") +
                '<circle r="18"/></g>'
        },
        cat: {
            label: "Cat",
            /* round head + two pointy ears */
            svg: '<ellipse cx="50" cy="60" rx="42" ry="35"/>' +
                 '<polygon points="10,48 16,2 46,30"/>' +
                 '<polygon points="90,48 84,2 54,30"/>'
        },
        dog: {
            label: "Dog",
            /* head + two floppy ears hanging at the sides */
            svg: '<ellipse cx="50" cy="52" rx="31" ry="38"/>' +
                 '<ellipse cx="17" cy="42" rx="14" ry="30" transform="rotate(18 17 42)"/>' +
                 '<ellipse cx="83" cy="42" rx="14" ry="30" transform="rotate(-18 83 42)"/>'
        },
        fish: {
            label: "Fish",
            /* body + tail, number sits in the body */
            svg: '<ellipse cx="42" cy="50" rx="40" ry="28"/>' +
                 '<polygon points="66,50 99,20 92,50 99,80"/>'
        }
    };

    /* The mask also cuts off the number, so each shape gets a font size
       (px) and a nudge (px) that puts the number in the
       widest part of the shape, where "100" still fits. */
    const THUMB_TEXT_FIT = {
        circle:  { size: 10,  x: 0,  y: 0 },
        heart:   { size: 9,   x: 0,  y: -2 },  /* widest near the top lobes */
        star:    { size: 7.5, x: 0,  y: 1 },   /* star's middle sits low */
        diamond: { size: 8,   x: 0,  y: 0 },
        flower:  { size: 9,   x: 0,  y: 0 },
        cat:     { size: 9,   x: 0,  y: 2 },   /* face is below the ears */
        dog:     { size: 9,   x: 0,  y: 1 },
        fish:    { size: 9,   x: -2, y: 0 }    /* body is left of the tail */
    };

    const THUMB_SHAPE_CHOICES = Object.keys(THUMB_SHAPES);
    const thumbMaskCache = new Map();

    async function getThumbMaskURL(shape) {
        if (thumbMaskCache.has(shape)) {
            return thumbMaskCache.get(shape);
        }

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#000">${THUMB_SHAPES[shape].svg}</svg>`;
        let url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));

        /* If the site blocks blob: images, use a data: URL instead */
        if (!(await canLoadImage(url))) {
            URL.revokeObjectURL(url);
            url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
        }

        thumbMaskCache.set(shape, url);
        return url;
    }

    let thumbShapeToken = 0;

    async function applyThumbShape(enabled, shape, size = 100) {
        const root = document.documentElement;
        const token = ++thumbShapeToken;

        root.style.setProperty("--flockmod-thumb-size", String(size / 100));

        if (!enabled || !THUMB_SHAPES[shape]) {
            root.classList.remove("flockmodThumbShapeActive");
            return;
        }

        const url = await getThumbMaskURL(shape);

        if (token !== thumbShapeToken) {
            return;
        }

        const fit = THUMB_TEXT_FIT[shape] || THUMB_TEXT_FIT.circle;
        root.style.setProperty("--flockmod-thumb-font", `${fit.size}px`);
        root.style.setProperty("--flockmod-thumb-text-x", `${fit.x}px`);
        root.style.setProperty("--flockmod-thumb-text-y", `${fit.y}px`);
        root.style.setProperty("--flockmod-thumb-mask", `url("${url}")`);
        root.classList.add("flockmodThumbShapeActive");
        makeThumbRoom();
    }

    /* A bigger thumb can be cut off by the box around its slider.
       Only boxes that are plain "display: block" with hidden overflow
       are changed (to flow-root + visible, which lays out the same);
       anything else (flex rows, scroll areas) is left alone. */
    function makeThumbRoom() {
        if (!document.documentElement.classList.contains("flockmodThumbShapeActive")) {
            return;
        }

        document.querySelectorAll('#sidebar .fmSlider, #sidebar .fmSwitch, .dialog:not([name="themeModMenu"]) .fmSlider').forEach((slider) => {
            let el = slider.parentElement;

            /* Only the slider's own row. Section boxes (which need their
               clipping to collapse) and scroll areas are never touched. */
            if (
                !el ||
                el.id === "sidebar" ||
                el.classList.contains("flockmodThumbRoom") ||
                el.matches(".containerContent, .boxBgContainer, .containerSidebar, .os-viewport, .os-padding, .os-content, .dynamicDialogArea, .modal-body")
            ) {
                return;
            }

            const style = getComputedStyle(el);

            if (style.display === "block" && style.overflow === "hidden") {
                el.classList.add("flockmodThumbRoom");
            }
        });
    }

    function readSavedThumbShape() {
        const shape = localStorage.getItem(THUMB_SHAPE_LS);
        const size = Number(localStorage.getItem(THUMB_SHAPE_SIZE_LS));

        return {
            enabled: localStorage.getItem(THUMB_SHAPE_ENABLED_LS) === "true",
            shape: THUMB_SHAPE_CHOICES.includes(shape) ? shape : "heart",
            size: Number.isInteger(size) && size >= 100 && size <= 150 ? size : 100
        };
    }

    function applySavedThumbShape() {
        const saved = readSavedThumbShape();
        applyThumbShape(customizationsEnabled && saved.enabled, saved.shape, saved.size);
    }

    function buildThumbShapeOptionsHTML() {
        return THUMB_SHAPE_CHOICES.map((key) =>
            `<option value="${key}">${THUMB_SHAPES[key].label}</option>`
        ).join("");
    }


    /* =========================================================
       ANIMATIONS (Animations tab)
       Everything is CSS. The script only switches classes on
       <html> and sets one speed variable, so an effect that is
       OFF costs nothing. Only cheap properties are animated
       (opacity, scale, translate, rotate), and every effect plays
       once and stops, so nothing runs while you draw.
       Personal setting: not part of share codes.
       ========================================================= */

    const ANIM_ENABLED_LS = "flockmodAnimEnabled";
    const ANIM_SPEED_LS = "flockmodAnimSpeed";

    const ANIM_EFFECTS = [
        {
            key: "Popups",
            cls: "fmAnimPopups",
            name: "Popups",
            description: "FlockMod popups (chat, settings, room list...) gently scale and fade in when they open."
        },
        {
            key: "Hover",
            cls: "fmAnimHover",
            name: "Hover & press",
            description: "Buttons lift a little on hover and press in when clicked. Slider thumbs grow while you drag them."
        },
        {
            key: "Select",
            cls: "fmAnimSelect",
            name: "Selections & alerts",
            description: "A small pop when you pick a tool, and a wiggle when a notification badge appears."
        },
        {
            key: "Menu",
            cls: "fmAnimMenu",
            name: "Mod menu effects",
            description: "This menu opens with a fade, rows slide in, color swatches pulse when changed, and the Enable customizations switch blooms."
        }
    ].map((effect) => ({
        ...effect,
        ls: `flockmodAnim${effect.key}`,
        toggleId: `themeModAnim${effect.key}`
    }));

    const reduceMotionQuery = window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : { matches: false };

    function readSavedAnimSettings() {
        const speed = Number(localStorage.getItem(ANIM_SPEED_LS));
        const effects = {};

        ANIM_EFFECTS.forEach((effect) => {
            effects[effect.key] = localStorage.getItem(effect.ls) !== "false"; /* default ON */
        });

        return {
            enabled: localStorage.getItem(ANIM_ENABLED_LS) !== "false",     /* default ON */
            speed: Number.isInteger(speed) && speed >= 50 && speed <= 200 ? speed : 100,
            effects
        };
    }

    /* speed is a percentage: 200 = twice as fast (half the time) */
    function applyAnimSettings(st) {
        const root = document.documentElement;
        const on = st.enabled && !reduceMotionQuery.matches;

        ANIM_EFFECTS.forEach((effect) => {
            root.classList.toggle(effect.cls, on && st.effects[effect.key]);
        });

        root.style.setProperty("--fm-anim-speed", String(100 / st.speed));
    }

    function applySavedAnimations() {
        applyAnimSettings(readSavedAnimSettings());
    }

    function animToggleHTML(id) {
        return `
            <label class="themeModToggle">
                <input type="checkbox" id="${id}">
                <span class="themeModToggleTrack">
                    <span class="themeModToggleOption themeModToggleOff">OFF</span>
                    <span class="themeModToggleOption themeModToggleOn">ON</span>
                    <span class="themeModToggleThumb"></span>
                </span>
            </label>`;
    }

    function buildAnimationsPanelHTML() {
        return `
                        <div class="themeModSectionContent" data-theme-panel="animations">

                            <div class="themeModSubsectionTitle">
                                Animations
                            </div>

                            <div class="themeModSetting themeModNoDivider">
                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">Enable animations</div>
                                    <div class="themeModSettingDescription">
                                        Turns every effect below on or off at once.
                                    </div>
                                </div>
                                ${animToggleHTML("themeModAnimEnabled")}
                            </div>

                            <div class="themeModSetting themeModNoDivider">
                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">Speed</div>
                                    <div class="themeModSettingDescription">
                                        Higher is snappier, lower is slower and softer.
                                    </div>
                                </div>
                                <div class="themeModRangeControl">
                                    <input type="range" id="themeModAnimSpeed" class="themeModRange" min="50" max="200" step="10" value="100">
                                    <span id="themeModAnimSpeedValue" class="themeModRangeValue">1.0×</span>
                                </div>
                            </div>

                            <div class="themeModSubsectionTitle themeModSpacingSubsection">
                                Effects
                            </div>

                            ${ANIM_EFFECTS.map((effect) => `
                            <div class="themeModSetting themeModNoDivider">
                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">${effect.name}</div>
                                    <div class="themeModSettingDescription">${effect.description}</div>
                                </div>
                                ${animToggleHTML(effect.toggleId)}
                            </div>`).join("")}

                            <div class="themeModLocalNote">
                                <i class="fas fa-circle-info"></i>
                                <span>Every effect plays once and stops, and only uses movement and fading, so it won't slow down drawing. If your computer's "reduce motion" setting is on, animations stay off automatically. Animations are a personal setting and aren't included in share codes.</span>
                            </div>

                            <div class="themeModReduceMotionNote themeModLocalNote" style="display: none;">
                                <i class="fas fa-universal-access"></i>
                                <span>Your computer's "reduce motion" setting is on, so animations are paused. The flower on the Enable customizations switch still shows, just without moving.</span>
                            </div>

                        </div>`;
    }

    function speedLabel(speed) {
        return `${(speed / 100).toFixed(1)}×`;
    }

    function setupAnimationsPanel(dialog) {
        const master = dialog.querySelector("#themeModAnimEnabled");
        const speed = dialog.querySelector("#themeModAnimSpeed");
        const speedValue = dialog.querySelector("#themeModAnimSpeedValue");
        const effectToggles = ANIM_EFFECTS.map((effect) => ({
            effect,
            toggle: dialog.querySelector(`#${effect.toggleId}`)
        }));
        const reduceNote = dialog.querySelector(".themeModReduceMotionNote");

        function fill(st) {
            master.checked = st.enabled;
            speed.value = String(st.speed);
            speedValue.textContent = speedLabel(st.speed);
            effectToggles.forEach(({ effect, toggle }) => {
                toggle.checked = st.effects[effect.key];
            });
        }

        function readInputs() {
            const effects = {};
            effectToggles.forEach(({ effect, toggle }) => {
                effects[effect.key] = toggle.checked;
            });
            return { enabled: master.checked, speed: Number(speed.value), effects };
        }

        function preview() {
            speedValue.textContent = speedLabel(Number(speed.value));
            applyAnimSettings(readInputs());
        }

        fill(readSavedAnimSettings());
        reduceNote.style.display = reduceMotionQuery.matches ? "" : "none";

        master.addEventListener("change", preview);
        speed.addEventListener("input", preview);
        effectToggles.forEach(({ toggle }) => toggle.addEventListener("change", preview));

        /* Swatch pulse: on "change" (when a pick is finished), not
           "input", so dragging inside the picker doesn't spam it */
        dialog.addEventListener("change", (event) => {
            const el = event.target;

            if (el instanceof HTMLInputElement && el.type === "color") {
                playOnce(el, "fmPulse");
            }
        });

        /* Bloom: plays only when the switch is turned ON by you */
        const enabledToggle = dialog.querySelector("#themeModEnabled");
        const bloomLabel = enabledToggle && enabledToggle.closest(".themeModToggle");

        if (bloomLabel) {
            bloomLabel.classList.add("themeModBloomToggle");
            enabledToggle.addEventListener("change", () => {
                if (enabledToggle.checked) {
                    playOnce(bloomLabel, "fmBloomPlay");
                } else {
                    bloomLabel.classList.remove("fmBloomPlay");
                }
            });
        }

        const applyBtn = dialog.querySelector(".themeModApplyButton");

        if (applyBtn) {
            applyBtn.addEventListener("click", () => burstPetals(applyBtn));
        }

        return {
            save() {
                const st = readInputs();
                localStorage.setItem(ANIM_ENABLED_LS, st.enabled);
                localStorage.setItem(ANIM_SPEED_LS, st.speed);
                ANIM_EFFECTS.forEach((effect) => {
                    localStorage.setItem(effect.ls, st.effects[effect.key]);
                });
            },
            reset() {
                const st = { enabled: true, speed: 100, effects: {} };
                ANIM_EFFECTS.forEach((effect) => { st.effects[effect.key] = true; });
                fill(st);
                applyAnimSettings(st);
                this.save();
            }
        };
    }


    /* =========================================================
       CELEBRATION EFFECTS (part of "Mod menu effects")
       Petal burst + pink glow on Apply, pink shimmer when a
       theme is loaded. The elements only exist for about a
       second and are removed afterwards.
       ========================================================= */

    function menuEffectsOn() {
        return document.documentElement.classList.contains("fmAnimMenu");
    }

    function animSpeedFactor() {
        const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--fm-anim-speed"));
        return Number.isFinite(v) && v > 0 ? v : 1;
    }

    function burstPetals(button) {
        if (!menuEffectsOn() || !button) {
            return;
        }

        /* Petals live inside the menu itself, so they share its
           layer (FlockMod's popup layer can sit above anything added
           straight to the page) and can't end up off screen */
        const dialog = button.closest(MOD_DIALOG_SELECTOR);

        if (!dialog) {
            return;
        }

        const r = button.getBoundingClientRect();
        const d = dialog.getBoundingClientRect();
        const layer = document.createElement("div");
        layer.className = "themeModPetalBurst";
        layer.style.left = `${r.left - d.left - dialog.clientLeft + r.width / 2}px`;
        layer.style.top = `${r.top - d.top - dialog.clientTop + r.height / 2}px`;

        const count = 9;

        for (let i = 0; i < count; i++) {
            /* Fan upwards (Apply sits at the bottom of the menu) */
            const angle = (-90 + (i - (count - 1) / 2) * 20 + (Math.random() * 12 - 6)) * Math.PI / 180;
            const dist = 45 + Math.random() * 35;
            const petal = document.createElement("div");

            petal.className = "themeModPetal";
            petal.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
            petal.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
            petal.style.setProperty("--rot", `${(Math.random() < 0.5 ? -1 : 1) * (120 + Math.random() * 200)}deg`);
            petal.style.setProperty("--size", String(0.7 + Math.random() * 0.45));
            petal.style.animationDelay = `${Math.round(Math.random() * 60 * animSpeedFactor())}ms`;
            layer.appendChild(petal);
        }

        dialog.appendChild(layer);
        setTimeout(() => layer.remove(), 1400 * animSpeedFactor());

        playOnce(button, "fmApplyGlow");
    }

    function playThemeShimmer(dialog) {
        if (!menuEffectsOn() || !dialog) {
            return;
        }

        const shimmer = document.createElement("div");
        shimmer.className = "themeModShimmer";
        dialog.appendChild(shimmer);
        setTimeout(() => shimmer.remove(), 1300 * animSpeedFactor());
    }

    /* Restarts a one-shot CSS animation class and cleans it up after
       (the longest animation inside it decides when it's removed) */
    function playOnce(el, cls) {
        el.classList.remove(cls);
        void el.offsetWidth;
        el.classList.add(cls);

        clearTimeout(el._fmPlayTimer);
        el._fmPlayTimer = setTimeout(() => el.classList.remove(cls), 2500);
    }

    /* =========================================================
       MOD MENU SIZE + POSITION
       Opens at a comfortable size (fitted to the window) and
       remembers where you last left it.
       ========================================================= */

    const MENU_RECT_LS = "flockmodMenuRect";

    function getInitialMenuRect() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        let rect = null;

        try {
            rect = JSON.parse(localStorage.getItem(MENU_RECT_LS) || "null");
        } catch (error) {
            rect = null;
        }

        let width = rect && Number(rect.width) ? rect.width : Math.min(760, vw * 0.85);
        let height = rect && Number(rect.height) ? rect.height : Math.min(560, vh * 0.85);

        width = Math.max(400, Math.min(width, vw - 20));
        height = Math.max(300, Math.min(height, vh - 20));

        let left = rect && Number.isFinite(rect.left) ? rect.left : (vw - width) / 2;
        let top = rect && Number.isFinite(rect.top) ? rect.top : (vh - height) / 2;

        /* Keep it on screen if the window got smaller since */
        left = Math.max(0, Math.min(left, vw - width));
        top = Math.max(0, Math.min(top, vh - height));

        return {
            width: `${Math.round(width)}px`,
            height: `${Math.round(height)}px`,
            left: `${Math.round(left)}px`,
            top: `${Math.round(top)}px`
        };
    }

    function rememberMenuRect(dialog) {
        const rect = {
            width: parseFloat(dialog.style.width),
            height: parseFloat(dialog.style.height),
            left: parseFloat(dialog.style.left),
            top: parseFloat(dialog.style.top)
        };

        if (Object.values(rect).every(Number.isFinite)) {
            localStorage.setItem(MENU_RECT_LS, JSON.stringify(rect));
        }
    }

    function setupThumbShape(dialog) {
        const toggle = dialog.querySelector("#themeModThumbShapeEnabled");
        const select = dialog.querySelector("#themeModThumbShape");
        const preview = dialog.querySelector(".themeModThumbPreview");
        const sizeSlider = dialog.querySelector("#themeModThumbShapeSize");
        const sizeValue = dialog.querySelector("#themeModThumbShapeSizeValue");

        if (!toggle || !select) {
            return;
        }

        const saved = readSavedThumbShape();
        toggle.checked = saved.enabled;
        select.value = saved.shape;
        sizeSlider.value = String(saved.size);
        sizeValue.textContent = `${saved.size}%`;

        async function updatePreview() {
            const url = await getThumbMaskURL(select.value);
            preview.style.setProperty("--flockmod-thumb-preview", `url("${url}")`);
        }

        const run = () => {
            sizeValue.textContent = `${sizeSlider.value}%`;
            applyThumbShape(toggle.checked, select.value, Number(sizeSlider.value));
            updatePreview();
        };

        toggle.addEventListener("change", run);
        select.addEventListener("change", run);
        sizeSlider.addEventListener("input", run);
        updatePreview();

        dialog.querySelector(".themeModApplyButton").addEventListener("click", () => {
            localStorage.setItem(THUMB_SHAPE_ENABLED_LS, String(toggle.checked));
            localStorage.setItem(THUMB_SHAPE_LS, select.value);
            localStorage.setItem(THUMB_SHAPE_SIZE_LS, sizeSlider.value);
        });

        dialog.querySelector(".themeModResetButton").addEventListener("click", () => {
            toggle.checked = false;
            select.value = "heart";
            sizeSlider.value = "100";
            localStorage.setItem(THUMB_SHAPE_ENABLED_LS, "false");
            localStorage.setItem(THUMB_SHAPE_LS, "heart");
            localStorage.setItem(THUMB_SHAPE_SIZE_LS, "100");
            run();
        });

        dialog.querySelector(".closeButton").addEventListener("click", applySavedThumbShape);
    }

    const FONT_LIBRARY_LS = "flockmodFontLibrary";
    const FONT_DB_NAME = "flockmodThemeModFonts";
    const FONT_DB_STORE = "files";
    const MAX_FONT_FILE_BYTES = 3 * 1024 * 1024;
    const FONT_NAME_PATTERN = /^[A-Za-z0-9][A-Za-z0-9 _-]{0,39}$/;

    const fontLoadCache = new Map();

    function isCustomFontValue(value) {
        return /^(google|upload):/.test(value);
    }

    function isValidFontValue(value) {
        if (typeof value !== "string") {
            return false;
        }

        if (FONT_CHOICES.includes(value)) {
            return true;
        }

        const match = value.match(/^(google|upload):(.+)$/);
        return Boolean(match && FONT_NAME_PATTERN.test(match[2]));
    }

    function fontValueLabel(value) {
        const match = value.match(/^(google|upload):(.+)$/);
        return match ? match[2] : value;
    }

    /* The family name we register with the browser. Prefixed so it
       can never clash with a font FlockMod itself uses. */
    function customFontFamily(value) {
        return "FMThemeMod " + value.replace(":", " ");
    }

    function getFontLibrary() {
        try {
            const list = JSON.parse(localStorage.getItem(FONT_LIBRARY_LS) || "[]");
            return Array.isArray(list) ? list.filter(isValidFontValue).filter(isCustomFontValue) : [];
        } catch (error) {
            return [];
        }
    }

    function setFontLibrary(list) {
        localStorage.setItem(FONT_LIBRARY_LS, JSON.stringify([...new Set(list)]));
    }

    /* ---- IndexedDB for uploaded font files ---- */

    function openFontDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(FONT_DB_NAME, 1);
            request.onupgradeneeded = () => request.result.createObjectStore(FONT_DB_STORE);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async function fontDB(mode, action) {
        const db = await openFontDB();

        return new Promise((resolve, reject) => {
            const tx = db.transaction(FONT_DB_STORE, mode);
            const request = action(tx.objectStore(FONT_DB_STORE));
            tx.oncomplete = () => { db.close(); resolve(request && request.result); };
            tx.onerror = () => { db.close(); reject(tx.error); };
        });
    }

    const putFontFile = (name, buffer) => fontDB("readwrite", (store) => store.put(buffer, name));
    const getFontFile = (name) => fontDB("readonly", (store) => store.get(name));
    const deleteFontFile = (name) => fontDB("readwrite", (store) => store.delete(name));

    /* ---- Google Fonts ---- */

    async function fetchGoogleFontCSS(name) {
        const family = encodeURIComponent(name).replace(/%20/g, "+");
        const urls = [
            `https://fonts.googleapis.com/css2?family=${family}:wght@400;500;600;700&display=swap`,
            `https://fonts.googleapis.com/css2?family=${family}&display=swap`
        ];

        for (const url of urls) {
            const response = await fetch(url);
            if (response.ok) {
                return response.text();
            }
        }

        throw new Error(`Google Fonts doesn't have a font called "${name}".`);
    }

    async function loadGoogleFontFaces(name, family) {
        const css = await fetchGoogleFontCSS(name);
        const blocks = css.match(/@font-face\s*{[^}]*}/g) || [];

        /* Only the Latin subsets, which cover the interface text */
        const wanted = blocks.filter((block) => {
            const range = (block.match(/unicode-range:\s*([^;]+);/) || [])[1] || "";
            return !range || /U\+0000-00FF|U\+0100-02BA|U\+0100-024F/i.test(range);
        });

        const faces = await Promise.all((wanted.length ? wanted : blocks).map(async (block) => {
            const url = (block.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/) || [])[1];

            if (!url) {
                return null;
            }

            const weight = (block.match(/font-weight:\s*([^;]+);/) || [])[1] || "400";
            const style = (block.match(/font-style:\s*([^;]+);/) || [])[1] || "normal";
            const range = (block.match(/unicode-range:\s*([^;]+);/) || [])[1];
            const buffer = await (await fetch(url)).arrayBuffer();

            const descriptors = { weight: weight.trim(), style: style.trim() };
            if (range) {
                descriptors.unicodeRange = range.trim();
            }

            return new FontFace(family, buffer, descriptors);
        }));

        return faces.filter(Boolean);
    }

    /* Makes sure a custom font is registered. Resolves to true/false. */
    function ensureFontLoaded(value) {
        if (!isCustomFontValue(value)) {
            return Promise.resolve(true);
        }

        if (fontLoadCache.has(value)) {
            return fontLoadCache.get(value);
        }

        const family = customFontFamily(value);
        const name = fontValueLabel(value);

        const promise = (async () => {
            let faces;

            if (value.startsWith("google:")) {
                faces = await loadGoogleFontFaces(name, family);
            } else {
                const buffer = await getFontFile(name);
                if (!buffer) {
                    throw new Error(`The uploaded font "${name}" isn't on this computer.`);
                }
                faces = [new FontFace(family, buffer)];
            }

            if (!faces.length) {
                throw new Error(`Couldn't load "${name}".`);
            }

            await Promise.all(faces.map((face) => face.load()));
            faces.forEach((face) => document.fonts.add(face));
            return true;
        })();

        /* Failed loads can be retried later */
        promise.catch(() => fontLoadCache.delete(value));
        fontLoadCache.set(value, promise);
        return promise;
    }

    /* Applies a font value to the page (the one place that does it) */
    function applyFontValue(value) {
        const root = document.documentElement;

        const isDefault = !value || value === "default" || !isValidFontValue(value);
        root.classList.toggle("flockmodFontActive", !isDefault);

        if (isDefault) {
            root.style.removeProperty("--flockmod-custom-ui-font");
            return;
        }

        if (!isCustomFontValue(value)) {
            root.style.setProperty("--flockmod-custom-ui-font", `"${value}", sans-serif`);
            return;
        }

        /* Set right away: the text switches over as soon as the font
           finishes loading. If it can't load, the fallback is used. */
        root.style.setProperty(
            "--flockmod-custom-ui-font",
            `"${customFontFamily(value)}", Rubik, sans-serif`
        );

        ensureFontLoaded(value).catch(() => {});
    }

    function buildFontOptionsHTML(selectedValue) {
        const builtIn = [
            ["default", "FlockMod default"],
            ["Arial", "Arial"],
            ["Verdana", "Verdana"],
            ["Trebuchet MS", "Trebuchet MS"],
            ["Georgia", "Georgia"]
        ];

        const library = getFontLibrary();

        /* A theme may use a font you haven't added (e.g. from a code) */
        if (isCustomFontValue(selectedValue) && !library.includes(selectedValue)) {
            library.push(selectedValue);
        }

        let html = builtIn.map(([value, label]) =>
            `<option value="${escapeHTML(value)}">${escapeHTML(label)}</option>`
        ).join("");

        if (library.length) {
            html += `<optgroup label="Your fonts">` + library.map((value) =>
                `<option value="${escapeHTML(value)}">${escapeHTML(fontValueLabel(value))}${value.startsWith("google:") ? " (Google)" : ""}</option>`
            ).join("") + `</optgroup>`;
        }

        return html;
    }

    function setupCustomFonts(dialog, fontSelect) {
        const nameInput = dialog.querySelector(".themeModGoogleFontName");
        const addButton = dialog.querySelector(".themeModGoogleFontAdd");
        const uploadButton = dialog.querySelector(".themeModFontUpload");
        const fileInput = dialog.querySelector(".themeModFontFile");
        const status = dialog.querySelector(".themeModFontStatus");
        const list = dialog.querySelector(".themeModFontList");

        function showStatus(message, kind = "ok") {
            status.textContent = message;
            status.dataset.kind = kind;
            status.style.display = message ? "block" : "none";
        }

        function refreshSelect(selectValue) {
            const keep = selectValue || fontSelect.value;
            fontSelect.innerHTML = buildFontOptionsHTML(keep);
            fontSelect.value = isValidFontValue(keep) ? keep : "default";
            if (!fontSelect.value) {
                fontSelect.value = "default";
            }
        }

        function renderList() {
            const library = getFontLibrary();

            list.innerHTML = library.length
                ? library.map((value) => `
                    <div class="themeModFontItem" data-value="${escapeHTML(value)}">
                        <span class="themeModFontSample" style="font-family: '${escapeHTML(customFontFamily(value))}', sans-serif;">
                            ${escapeHTML(fontValueLabel(value))}
                        </span>
                        <span class="themeModFontKind">${value.startsWith("google:") ? "Google" : "Uploaded"}</span>
                        <button type="button" class="themeModButton themeModDangerButton" data-action="remove">Remove</button>
                    </div>
                `).join("")
                : "";

            /* Load each so its name previews in its own font */
            library.forEach((value) => ensureFontLoaded(value).catch(() => {}));
        }

        async function addFont(value, successMessage) {
            showStatus("Loading font...");

            try {
                await ensureFontLoaded(value);
            } catch (error) {
                showStatus(error.message || "Couldn't load that font.", "error");
                return false;
            }

            setFontLibrary([...getFontLibrary(), value]);
            refreshSelect(value);
            applyFontValue(value);       /* preview it; Apply saves the choice */
            renderList();
            showStatus(successMessage + " Press Apply Changes to keep it.");
            return true;
        }

        async function addGoogleFont() {
            const name = nameInput.value.trim().replace(/\s+/g, " ");

            if (!FONT_NAME_PATTERN.test(name)) {
                showStatus("Type a Google Fonts name, like \"Poppins\" or \"Comic Neue\".", "error");
                return;
            }

            addButton.disabled = true;

            try {
                if (await addFont(`google:${name}`, `Added "${name}" from Google Fonts.`)) {
                    nameInput.value = "";
                }
            } catch (error) {
                showStatus("Couldn't reach Google Fonts. Check your connection.", "error");
            } finally {
                addButton.disabled = false;
            }
        }

        addButton.addEventListener("click", addGoogleFont);
        nameInput.addEventListener("themeModEnter", addGoogleFont);

        uploadButton.addEventListener("click", () => fileInput.click());

        fileInput.addEventListener("change", async () => {
            const file = fileInput.files && fileInput.files[0];
            fileInput.value = "";

            if (!file) {
                return;
            }

            if (!/\.(ttf|otf|woff2?)$/i.test(file.name)) {
                showStatus("That isn't a font file. Use .ttf, .otf, .woff or .woff2.", "error");
                return;
            }

            if (file.size > MAX_FONT_FILE_BYTES) {
                showStatus("That font file is too big (3 MB max).", "error");
                return;
            }

            let name = file.name
                .replace(/\.(ttf|otf|woff2?)$/i, "")
                .replace(/[^A-Za-z0-9 _-]/g, " ")
                .replace(/\s+/g, " ")
                .trim()
                .slice(0, 40) || "My font";

            if (!/^[A-Za-z0-9]/.test(name)) {
                name = "Font " + name;
            }

            const value = `upload:${name.slice(0, 40)}`;

            try {
                const buffer = await file.arrayBuffer();

                /* Make sure the browser can actually read it first */
                await new FontFace("FMThemeModCheck", buffer).load();

                await putFontFile(fontValueLabel(value), buffer);
                fontLoadCache.delete(value);
                await addFont(value, `Added "${fontValueLabel(value)}".`);
            } catch (error) {
                showStatus("That font file couldn't be read. It may be damaged.", "error");
            }
        });

        list.addEventListener("click", async (event) => {
            const button = event.target.closest('button[data-action="remove"]');
            const item = event.target.closest(".themeModFontItem");

            if (!button || !item) {
                return;
            }

            const value = item.dataset.value;

            if (button.dataset.confirm !== "yes") {
                button.dataset.confirm = "yes";
                button.textContent = "Sure?";
                setTimeout(() => {
                    if (button.isConnected) {
                        button.dataset.confirm = "";
                        button.textContent = "Remove";
                    }
                }, 3000);
                return;
            }

            setFontLibrary(getFontLibrary().filter((v) => v !== value));

            if (value.startsWith("upload:")) {
                try {
                    await deleteFontFile(fontValueLabel(value));
                } catch (error) { /* already gone */ }
            }

            const wasSelected = fontSelect.value === value;
            refreshSelect(wasSelected ? "default" : fontSelect.value);

            if (wasSelected) {
                applyFontValue("default");
            }

            renderList();
            showStatus(`Removed "${fontValueLabel(value)}".` + (wasSelected ? " Switched back to the default font; press Apply Changes to keep that." : ""));
        });

        renderList();
    }

    function applySavedFont() {
        const savedFont =
            localStorage.getItem("flockmodCustomUIFont") || "default";

        applyFontValue(customizationsEnabled ? savedFont : "default");
    }

    function applySavedFontSize() {
        const savedFontSize =
            localStorage.getItem("flockmodCustomUIFontSize") || "100";

        if (customizationsEnabled) {
            applyFontSizePreview(savedFontSize);
        } else {
            document.documentElement.style.removeProperty(
                "--flockmod-custom-ui-font-size"
            );
        }
    }

    function applySavedFontWeight() {
        const savedFontWeight =
            localStorage.getItem("flockmodCustomUIFontWeight") || "regular";

        if (customizationsEnabled) {
            applyFontWeightPreview(savedFontWeight);
        } else {
            document.documentElement.style.removeProperty(
                "--flockmod-custom-ui-font-weight"
            );
        }
    }

    function applySavedSpacing() {
        const savedSpacing =
            localStorage.getItem("flockmodCustomUISpacing") || "100";

        if (customizationsEnabled) {
            applySpacingPreview(savedSpacing);
        } else {
            document.documentElement.style.removeProperty(
                "--flockmod-ui-spacing"
            );
        }
    }

    function applySavedSelectedColor() {
        const savedSelected =
            localStorage.getItem("flockmodCustomSelectedColor") || "#4f5156";

        applySelectedEnabledPreview(
            isSavedOnByDefault("flockmodCustomSelectedColorEnabled")
        );

        if (customizationsEnabled) {
            applySelectedColorPreview(savedSelected);
        }
    }

    function applySavedHoverColor() {
        const savedHover =
            localStorage.getItem("flockmodCustomHoverColor") || "#4f5156";

        applyHoverEnabledPreview(
            isSavedOnByDefault("flockmodCustomHoverColorEnabled")
        );

        if (customizationsEnabled) {
            applyHoverColorPreview(savedHover);
        }
    }

    function applySavedText1Color() {
        const savedEnabled =
            localStorage.getItem("flockmodCustomText1ColorEnabled") === "true";

        const savedColor =
            localStorage.getItem("flockmodCustomText1Color") || "#ffffff";

        if (customizationsEnabled) {
            applyText1ColorEnabledPreview(savedEnabled);
            applyText1ColorPreview(savedColor);
        } else {
            applyText1ColorEnabledPreview(false);
        }
    }

    function applySavedText2Color() {
        const savedEnabled =
            localStorage.getItem("flockmodCustomText2ColorEnabled") === "true";

        const savedColor =
            localStorage.getItem("flockmodCustomText2Color") || "#ffffff";

        if (customizationsEnabled) {
            applyText2ColorEnabledPreview(savedEnabled);
            applyText2ColorPreview(savedColor);
        } else {
            applyText2ColorEnabledPreview(false);
        }
    }

    function addModButton() {
        const bottomBar = document.querySelector(
            "#bottombar > nav > div > ul:nth-child(3)"
        );

        if (!bottomBar) {
            return false;
        }

        if (bottomBar.querySelector(MOD_BUTTON_SELECTOR)) {
            return true;
        }

        const modItem = document.createElement("li");
        modItem.className = "nav-item";

        const modButton = document.createElement("a");
        modButton.href = "#";
        modButton.className = "nav-link themeModMenuButton";

        modButton.innerHTML = `
            <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                aria-hidden="true"
                style="fill: currentColor;"
            >
                <g transform="translate(12 12)">
                    <ellipse cx="0" cy="-5.2" rx="4.1" ry="4.8"/>
                    <ellipse cx="0" cy="-5.2" rx="4.1" ry="4.8" transform="rotate(72)"/>
                    <ellipse cx="0" cy="-5.2" rx="4.1" ry="4.8" transform="rotate(144)"/>
                    <ellipse cx="0" cy="-5.2" rx="4.1" ry="4.8" transform="rotate(216)"/>
                    <ellipse cx="0" cy="-5.2" rx="4.1" ry="4.8" transform="rotate(288)"/>
                    <circle cx="0" cy="0" r="2.5"/>
                </g>
            </svg>
        `;

        modButton.title = "Theme Mod Menu";

        modButton.addEventListener("click", (event) => {
            event.preventDefault();
            toggleModMenu();
        });

        modItem.appendChild(modButton);
        bottomBar.insertBefore(modItem, bottomBar.children[1]);

        return true;
    }


    /* =========================================================
       THEMES: share codes, saved themes, presets
       ---------------------------------------------------------
       A "theme" is every look-related setting (not the on/off
       "Enable customizations" switch). In a code each setting is
       stored by a stable id = its localStorage key without the
       "flockmod"/"flockmodCustom" prefix.

       !! COMPATIBILITY RULE !!
       Never rename or reuse a setting's localStorage key. If one
       ever has to change, bump THEME_FORMAT_VERSION and add an
       entry to THEME_MIGRATIONS that translates old ids to new
       ones, so older codes keep working.
       ========================================================= */

    const THEME_FORMAT_VERSION = 1;
    const THEME_CODE_PREFIX = "FMTHEME";
    const SAVED_THEMES_LS = "flockmodSavedThemes";
    const THEME_UNDO_LS = "flockmodThemeUndo";

    /* Upgrades a code's settings one version at a time.
       Example for the future:
       1: (s) => { s.NewName = s.OldName; delete s.OldName; return s; } */
    const THEME_MIGRATIONS = {};

    const FONT_CHOICES = ["default", "Arial", "Verdana", "Trebuchet MS", "Georgia"];
    const FONT_WEIGHT_CHOICES = ["regular", "medium", "semibold", "bold"];

    let themeFieldsCache = null;

    function getThemeFields() {
        if (themeFieldsCache) {
            return themeFieldsCache;
        }

        const fields = [];
        const add = (ls, type, def, extra = {}) => {
            fields.push({
                id: ls.replace(/^flockmod(Custom)?/, ""),
                ls,
                type,
                def,
                ...extra
            });
        };

        [
            ...TOGGLE_COLOR_SETTINGS,
            ...BAR_COLOR_SETTINGS,
            ...SIMPLE_COLOR_SETTINGS
        ].forEach((setting) => {
            add(setting.lsEnabled, "bool", false);
            add(setting.lsColor, "color", setting.defaultColor);
        });

        /* Gradients (added later; codes without them = gradients off) */
        getAllGradientInfos().forEach((g) => {
            add(g.lsEnabled, "bool", false);
            add(g.lsColor, "color", g.defaultColor);
            add(g.lsAngle, "int", g.defaultAngle, { min: 0, max: 360 });
        });

        add("flockmodCustomText1ColorEnabled", "bool", false);
        add("flockmodCustomText1Color", "color", "#ffffff");
        add("flockmodCustomText2ColorEnabled", "bool", false);
        add("flockmodCustomText2Color", "color", "#ffffff");
        add("flockmodCustomSelectedColorEnabled", "bool", true);
        add("flockmodCustomSelectedColor", "color", "#4f5156");
        add("flockmodCustomHoverColorEnabled", "bool", true);
        add("flockmodCustomHoverColor", "color", "#4f5156");
        add(SIMPLE_MODE_LS, "bool", false);

        /* Background look settings (not the images themselves) */
        BACKGROUND_PLACES.forEach((place) => {
            bgFieldsFor(place).forEach(([suffix, type, def, extra]) => {
                add(bgLsKey(place, suffix), type, def, extra || {});
            });
        });

        add("flockmodCustomUIFont", "font", "default");
        add("flockmodCustomUIFontWeight", "enum", "regular", { choices: FONT_WEIGHT_CHOICES });
        add("flockmodCustomUIFontSize", "int", 100, { min: 90, max: 110 });
        add("flockmodCustomUISpacing", "int", 100, { min: 75, max: 125 });
        add("flockmodCustomUIRadius", "int", 5, { min: 0, max: 12 });
        add(THUMB_SHAPE_ENABLED_LS, "bool", false);
        add(THUMB_SHAPE_LS, "enum", "heart", { choices: THUMB_SHAPE_CHOICES });
        add(THUMB_SHAPE_SIZE_LS, "int", 100, { min: 100, max: 150 });

        themeFieldsCache = fields;
        return fields;
    }

    function isValidThemeValue(field, value) {
        switch (field.type) {
            case "bool":
                return typeof value === "boolean";
            case "color":
                return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
            case "int":
                return Number.isInteger(value) && value >= field.min && value <= field.max;
            case "enum":
                return field.choices.includes(value);
            case "font":
                return isValidFontValue(value);
            default:
                return false;
        }
    }

    function readThemeField(field) {
        const raw = localStorage.getItem(field.ls);

        if (raw === null) {
            return field.def;
        }

        let value = raw;

        if (field.type === "bool") {
            value = raw === "true";
        } else if (field.type === "int") {
            value = Number(raw);
        } else if (field.type === "color") {
            value = raw.toLowerCase();
        }

        return isValidThemeValue(field, value) ? value : field.def;
    }

    /* Current applied theme, only the settings that differ from
       default (keeps codes short; missing = default on import) */
    function getCurrentThemeSettings() {
        const settings = {};

        getThemeFields().forEach((field) => {
            const value = readThemeField(field);
            const def = field.type === "color" ? field.def.toLowerCase() : field.def;

            if (value !== def) {
                settings[field.id] = value;
            }
        });

        return settings;
    }

    function toBase64Url(text) {
        const bytes = new TextEncoder().encode(text);
        let binary = "";
        bytes.forEach((b) => { binary += String.fromCharCode(b); });
        return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }

    function fromBase64Url(text) {
        let b64 = text.replace(/-/g, "+").replace(/_/g, "/");
        while (b64.length % 4) {
            b64 += "=";
        }
        const binary = atob(b64);
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        return new TextDecoder().decode(bytes);
    }

    function encodeThemeCode(settings, name) {
        const payload = { v: THEME_FORMAT_VERSION, s: settings };

        if (name) {
            payload.n = String(name).slice(0, 40);
        }

        return `${THEME_CODE_PREFIX}${THEME_FORMAT_VERSION}:${toBase64Url(JSON.stringify(payload))}`;
    }

    /* Returns { settings, name, version, skipped, newer } or throws
       an Error with a friendly message */
    function decodeThemeCode(code) {
        const cleaned = String(code || "").replace(/\s+/g, "");
        const match = cleaned.match(/^FMTHEME(\d+):([A-Za-z0-9_-]+)$/);

        if (!match) {
            throw new Error("That doesn't look like a theme code.");
        }

        let payload;

        try {
            payload = JSON.parse(fromBase64Url(match[2]));
        } catch (error) {
            throw new Error("This theme code is damaged or incomplete.");
        }

        if (!payload || typeof payload !== "object" || typeof payload.s !== "object" || payload.s === null) {
            throw new Error("This theme code is damaged or incomplete.");
        }

        const version = Number(payload.v) || Number(match[1]) || 1;
        let raw = { ...payload.s };

        /* Old code -> run it through every upgrade step up to now */
        for (let v = version; v < THEME_FORMAT_VERSION; v++) {
            if (THEME_MIGRATIONS[v]) {
                raw = THEME_MIGRATIONS[v](raw);
            }
        }

        /* Keep only settings we know, with valid values */
        const settings = {};
        let skipped = 0;
        const byId = new Map(getThemeFields().map((f) => [f.id, f]));

        Object.keys(raw).forEach((id) => {
            const field = byId.get(id);

            if (field && isValidThemeValue(field, raw[id])) {
                settings[id] = field.type === "color" ? raw[id].toLowerCase() : raw[id];
            } else {
                skipped++;
            }
        });

        return {
            settings,
            name: typeof payload.n === "string" ? payload.n.slice(0, 40) : "",
            version,
            skipped,
            newer: version > THEME_FORMAT_VERSION
        };
    }

    /* full = true: settings not in the theme go back to default.
       full = false (presets): only the listed settings change. */
    function writeThemeSettings(settings, full) {
        getThemeFields().forEach((field) => {
            if (Object.prototype.hasOwnProperty.call(settings, field.id)) {
                localStorage.setItem(field.ls, String(settings[field.id]));
            } else if (full) {
                localStorage.setItem(field.ls, String(field.def));
            }
        });
    }

    function saveThemeUndo() {
        localStorage.setItem(THEME_UNDO_LS, encodeThemeCode(getCurrentThemeSettings(), "Before last load"));
    }

    function getSavedThemes() {
        try {
            const list = JSON.parse(localStorage.getItem(SAVED_THEMES_LS) || "[]");
            return Array.isArray(list)
                ? list.filter((t) => t && typeof t.name === "string" && typeof t.code === "string")
                : [];
        } catch (error) {
            return [];
        }
    }

    function setSavedThemes(list) {
        localStorage.setItem(SAVED_THEMES_LS, JSON.stringify(list));
    }

    /* Built-in presets. They only set simple coloring, so loading
       one never touches your detailed colors or Interface settings. */
    const THEME_PRESETS = [
        { name: "Midnight Violet", colors: { background: "#16121f", surface: "#241d33", accent: "#9b6bff", text: "#ece6ff", icons: "#b9a8e0" } },
        { name: "Ocean",           colors: { background: "#0d1b2a", surface: "#1b2d44", accent: "#3aa8d4", text: "#e0ecf5", icons: "#8fb1c9" } },
        { name: "Forest",          colors: { background: "#121a15", surface: "#1d2a22", accent: "#5fbf7f", text: "#e3efe6", icons: "#9bbfa6" } },
        { name: "Mocha",           colors: { background: "#1f1814", surface: "#2e241e", accent: "#d49a5a", text: "#f1e6dc", icons: "#bfa58f" } },
        { name: "Sakura",          colors: { background: "#fbeef2", surface: "#f3dbe3", accent: "#e0709a", text: "#5a3a47", icons: "#b87f94" } },
        { name: "Paper",           colors: { background: "#f4f4f2", surface: "#e4e4e1", accent: "#5b7fa6", text: "#2b2d31", icons: "#6b6f76" } }
    ];

    function presetToSettings(preset) {
        const settings = { SimpleColoringEnabled: true };

        SIMPLE_COLOR_SETTINGS.forEach((setting) => {
            const color = preset.colors[setting.key];
            const enabledId = setting.lsEnabled.replace(/^flockmod(Custom)?/, "");
            const colorId = setting.lsColor.replace(/^flockmod(Custom)?/, "");

            settings[enabledId] = Boolean(color);

            if (color) {
                settings[colorId] = color;
            }
        });

        return settings;
    }

    function escapeHTML(text) {
        return String(text).replace(/[&<>"']/g, (c) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[c]));
    }

    function buildPresetCardsHTML() {
        return THEME_PRESETS.map((preset, index) => `
            <div class="themeModPresetCard">
                <div class="themeModPresetSwatches">
                    ${["background", "surface", "accent", "text", "icons"].map((key) =>
                        `<span style="background-color: ${preset.colors[key]}"></span>`
                    ).join("")}
                </div>
                <div class="themeModPresetName">${escapeHTML(preset.name)}</div>
                <button type="button" class="themeModButton themeModPresetApply" data-preset-index="${index}">
                    Use
                </button>
            </div>
        `).join("");
    }

    async function copyText(text, fallbackField) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            if (fallbackField) {
                fallbackField.value = text;
                fallbackField.select();
                try {
                    return document.execCommand("copy");
                } catch (e) {
                    return false;
                }
            }
            return false;
        }
    }

    /* Re-creates the open menu (same spot and size) so every input
       shows the newly loaded values, then returns to a section. */
    function reopenModMenu(section) {
        const old = document.querySelector(MOD_DIALOG_SELECTOR);
        const keep = old
            ? { left: old.style.left, top: old.style.top, width: old.style.width, height: old.style.height }
            : null;

        if (old) {
            old.remove();
        }

        const dialog = createModMenu();

        if (!dialog) {
            return null;
        }

        if (keep) {
            Object.assign(dialog.style, keep);
        }

        const button = dialog.querySelector(`.themeModSidebarItem[data-theme-section="${section}"]`);

        if (button) {
            button.click();
        }

        return dialog;
    }

    function setupThemesPanel(dialog) {
        const panel = dialog.querySelector('[data-theme-panel="themes"]');

        if (!panel) {
            return;
        }

        const status = panel.querySelector(".themeModThemeStatus");
        const exportBox = panel.querySelector(".themeModExportCode");
        const importBox = panel.querySelector(".themeModImportCode");
        const saveName = panel.querySelector(".themeModSaveName");
        const savedList = panel.querySelector(".themeModSavedList");
        const undoRow = panel.querySelector(".themeModUndoRow");

        function showStatus(message, kind = "ok") {
            status.textContent = message;
            status.dataset.kind = kind;
            status.style.display = message ? "block" : "none";
        }

        /* Stays visible after the menu reopens */
        function flash(section, message, kind) {
            const reopened = reopenModMenu(section);
            const newStatus = reopened && reopened.querySelector(".themeModThemeStatus");

            if (newStatus) {
                newStatus.textContent = message;
                newStatus.dataset.kind = kind || "ok";
                newStatus.style.display = "block";
            }
        }

        function loadTheme(settings, full, message) {
            saveThemeUndo();
            writeThemeSettings(settings, full);
            loadSavedCustomizations();
            flash("themes", message);
            playThemeShimmer(document.querySelector(MOD_DIALOG_SELECTOR));
        }

        undoRow.style.display = localStorage.getItem(THEME_UNDO_LS) ? "" : "none";

        /* ---- Export ---- */
        panel.querySelector(".themeModExportButton").addEventListener("click", async () => {
            const code = encodeThemeCode(getCurrentThemeSettings());
            exportBox.value = code;
            exportBox.style.display = "block";

            const copied = await copyText(code, exportBox);
            showStatus(copied
                ? "Theme code copied! Paste it anywhere to share it."
                : "Here's your code, select it and copy it with Ctrl+C.");
        });

        /* ---- Import ---- */
        panel.querySelector(".themeModImportButton").addEventListener("click", () => {
            let result;

            try {
                result = decodeThemeCode(importBox.value);
            } catch (error) {
                showStatus(error.message, "error");
                return;
            }

            let message = result.name
                ? `Imported "${result.name}".`
                : "Theme imported.";

            if (result.newer) {
                message += " It was made with a newer version of the mod, so update to see all of it.";
            } else if (result.skipped) {
                message += ` ${result.skipped} unknown setting(s) were skipped.`;
            }

            /* Fonts that came with the code */
            const font = result.settings.UIFont;

            if (font && font.startsWith("google:")) {
                setFontLibrary([...getFontLibrary(), font]);
            } else if (font && font.startsWith("upload:") && !getFontLibrary().includes(font)) {
                message += ` It uses an uploaded font ("${fontValueLabel(font)}") you don't have, so the default font is shown until you upload it.`;
            }

            loadTheme(result.settings, true, message);
        });

        /* ---- Undo ---- */
        panel.querySelector(".themeModUndoButton").addEventListener("click", () => {
            const code = localStorage.getItem(THEME_UNDO_LS);

            if (!code) {
                return;
            }

            try {
                const result = decodeThemeCode(code);
                localStorage.removeItem(THEME_UNDO_LS);
                writeThemeSettings(result.settings, true);
                loadSavedCustomizations();
                flash("themes", "Went back to your theme from before the last load.");
                playThemeShimmer(document.querySelector(MOD_DIALOG_SELECTOR));
            } catch (error) {
                showStatus("Couldn't undo, the backup was damaged.", "error");
            }
        });

        /* ---- My Themes ---- */
        function renderSavedList() {
            const themes = getSavedThemes();

            if (!themes.length) {
                savedList.innerHTML = `<div class="themeModSavedEmpty">No saved themes yet. Name your current look above and save it.</div>`;
                return;
            }

            savedList.innerHTML = themes.map((theme, index) => `
                <div class="themeModSavedItem" data-index="${index}">
                    <div class="themeModSavedName">${escapeHTML(theme.name)}</div>
                    <div class="themeModSavedButtons">
                        <button type="button" class="themeModButton" data-action="load">Load</button>
                        <button type="button" class="themeModButton" data-action="copy">Copy code</button>
                        <button type="button" class="themeModButton" data-action="rename">Rename</button>
                        <button type="button" class="themeModButton themeModDangerButton" data-action="delete">Delete</button>
                    </div>
                </div>
            `).join("");
        }

        function saveCurrent() {
            const name = saveName.value.trim().slice(0, 40);

            if (!name) {
                showStatus("Give your theme a name first.", "error");
                return;
            }

            const themes = getSavedThemes();
            const code = encodeThemeCode(getCurrentThemeSettings(), name);
            const existing = themes.findIndex((t) => t.name.toLowerCase() === name.toLowerCase());

            if (existing >= 0) {
                themes[existing] = { name, code };
                showStatus(`Updated "${name}".`);
            } else {
                themes.push({ name, code });
                showStatus(`Saved "${name}".`);
            }

            setSavedThemes(themes);
            saveName.value = "";
            renderSavedList();
        }

        panel.querySelector(".themeModSaveButton").addEventListener("click", saveCurrent);
        saveName.addEventListener("themeModEnter", saveCurrent);

        savedList.addEventListener("click", async (event) => {
            const button = event.target.closest("button[data-action]");
            const item = event.target.closest(".themeModSavedItem");

            if (!button || !item) {
                return;
            }

            const themes = getSavedThemes();
            const index = Number(item.dataset.index);
            const theme = themes[index];

            if (!theme) {
                return;
            }

            const action = button.dataset.action;

            if (action === "load") {
                try {
                    loadTheme(decodeThemeCode(theme.code).settings, true, `Loaded "${theme.name}".`);
                } catch (error) {
                    showStatus("This saved theme is damaged and can't be loaded.", "error");
                }
            }

            if (action === "copy") {
                const copied = await copyText(theme.code, exportBox);
                if (!copied) {
                    exportBox.value = theme.code;
                    exportBox.style.display = "block";
                }
                showStatus(copied ? `Copied the code for "${theme.name}".` : "Select the code above and copy it with Ctrl+C.");
            }

            if (action === "delete") {
                /* Two clicks to delete, so it can't happen by accident */
                if (button.dataset.confirm !== "yes") {
                    button.dataset.confirm = "yes";
                    button.textContent = "Sure?";
                    setTimeout(() => {
                        if (button.isConnected) {
                            button.dataset.confirm = "";
                            button.textContent = "Delete";
                        }
                    }, 3000);
                    return;
                }

                themes.splice(index, 1);
                setSavedThemes(themes);
                renderSavedList();
                showStatus(`Deleted "${theme.name}".`);
            }

            if (action === "rename") {
                const nameEl = item.querySelector(".themeModSavedName");
                const input = document.createElement("input");
                input.type = "text";
                input.className = "themeModTextInput";
                input.value = theme.name;
                input.maxLength = 40;
                nameEl.replaceWith(input);
                input.focus();
                input.select();

                let done = false;
                const finish = (commit) => {
                    if (done) {
                        return;
                    }
                    done = true;

                    const newName = input.value.trim();

                    if (commit && newName && newName !== theme.name) {
                        const list = getSavedThemes();
                        if (list[index]) {
                            list[index].name = newName;
                            try {
                                const decoded = decodeThemeCode(list[index].code);
                                list[index].code = encodeThemeCode(decoded.settings, newName);
                            } catch (error) { /* keep the old code */ }
                            setSavedThemes(list);
                        }
                    }

                    renderSavedList();
                };

                input.addEventListener("themeModEnter", () => finish(true));
                input.addEventListener("themeModEscape", () => finish(false));
                input.addEventListener("blur", () => finish(true));
            }
        });

        /* ---- Presets ---- */
        panel.querySelectorAll(".themeModPresetApply").forEach((button) => {
            button.addEventListener("click", () => {
                const preset = THEME_PRESETS[Number(button.dataset.presetIndex)];

                if (preset) {
                    loadTheme(
                        presetToSettings(preset),
                        false,
                        `Using "${preset.name}" (simple coloring). Your detailed colors are untouched.`
                    );
                }
            });
        });

        renderSavedList();
    }

    function createModMenu() {
        if (document.querySelector(MOD_DIALOG_SELECTOR)) {
            return document.querySelector(MOD_DIALOG_SELECTOR);
        }

        const dialog = document.createElement("div");

        dialog.className = "dialog dialogVisible dialogFocus";
        dialog.setAttribute("name", "themeModMenu");

        Object.assign(dialog.style, {
            ...getInitialMenuRect(),
            minWidth: "400px",
            minHeight: "300px"
        });

        dialog.innerHTML = `
            <div class="themeModDialogInner">
                <div class="dialogTitlebar movable">
                    <div class="dialogTitle">
                        <div class="pull-left">
                            <i class="fas fa-palette"></i>
                            <span>Theme Mod Menu</span>
                        </div>

                        <div class="dialogTitleButtons">
                            <div style="text-align: right;">
                                <a href="#" class="btn btn-md closeButton" title="Close">
                                    <i class="fas fa-window-close titleButton"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="themeModContent">

                    <div class="themeModSidebar">

                        <button class="themeModSidebarItem active" data-theme-section="general">
                            General
                        </button>

                        <button class="themeModSidebarItem" data-theme-section="interface">
                            Interface
                        </button>

                        <button class="themeModSidebarItem" data-theme-section="colors">
                            Colors
                        </button>

                        <button class="themeModSidebarItem" data-theme-section="themes">
                            Themes
                        </button>

                        <button class="themeModSidebarItem" data-theme-section="animations">
                            Animations
                        </button>

                        <button class="themeModSidebarItem" data-theme-section="backgrounds">
                            Backgrounds
                        </button>

                        <div class="themeModSidebarFill"></div>

                    </div>

                    <div class="themeModMainColumn">

                    <div class="themeModPanel">

                        <div class="themeModPanelHeader">

                            <div class="themeModSectionTitle">
                                General
                            </div>

                            <!-- Filled in by setupJumpNavAndSearch() with one chip per subsection -->
                            <div class="themeModJumpBar"></div>

                            <div class="themeModSearch">
                                <button type="button" class="themeModSearchButton" title="Search settings">
                                    <i class="fas fa-search"></i>
                                </button>
                                <input type="text" class="themeModSearchInput" placeholder="Search settings..." spellcheck="false">
                            </div>

                        </div>

                        <div class="themeModSectionsScroll">

                        <div class="themeModSectionContent" data-theme-panel="general">

                            <div class="themeModSetting">

                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">
                                        Enable customizations
                                    </div>

                                    <div class="themeModSettingDescription">
                                        Turn your FlockMod customizations on or off.
                                    </div>
                                </div>

                                <label class="themeModToggle">

                                    <input type="checkbox" id="themeModEnabled">

                                    <span class="themeModToggleTrack">
                                        <span class="themeModToggleOption themeModToggleOff">
                                            OFF
                                        </span>

                                        <span class="themeModToggleOption themeModToggleOn">
                                            ON
                                        </span>

                                        <span class="themeModToggleThumb"></span>
                                    </span>

                                </label>

                            </div>

                            <div class="themeModSetting">

                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">
                                        Simple coloring
                                    </div>

                                    <div class="themeModSettingDescription">
                                        Theme with a few main colors instead of every detailed one. Your detailed colors are kept and come back when this is off.
                                    </div>
                                </div>

                                <label class="themeModToggle">
                                    <input type="checkbox" id="themeModSimpleMode">
                                    <span class="themeModToggleTrack">
                                        <span class="themeModToggleOption themeModToggleOff">OFF</span>
                                        <span class="themeModToggleOption themeModToggleOn">ON</span>
                                        <span class="themeModToggleThumb"></span>
                                    </span>
                                </label>

                            </div>

                        </div>

                        <div class="themeModSectionContent" data-theme-panel="interface">

                            <div class="themeModSubsectionTitle">
                                Font
                            </div>

                            <div class="themeModSetting themeModNoDivider">

                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">
                                        UI Font
                                    </div>

                                    <div class="themeModSettingDescription">
                                        Choose the font used by the FlockMod interface.
                                    </div>
                                </div>

                                <!-- Options are filled in by buildFontOptionsHTML() -->
                                <select id="themeModUIFont" class="themeModSelect"></select>

                            </div>

                            <div class="themeModSetting themeModNoDivider">

                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">
                                        Add a custom font
                                    </div>

                                    <div class="themeModSettingDescription">
                                        Type any font name from fonts.google.com, or upload a font file (.ttf, .otf, .woff, .woff2). Added fonts show up in the UI Font list.
                                    </div>
                                </div>

                                <div class="themeModFontAddControls">
                                    <div class="themeModSaveRow">
                                        <input type="text" class="themeModTextInput themeModGoogleFontName" placeholder="e.g. Poppins" maxlength="40" spellcheck="false">
                                        <button type="button" class="themeModButton themeModGoogleFontAdd">Add</button>
                                    </div>
                                    <button type="button" class="themeModButton themeModFontUpload">
                                        <i class="fas fa-upload"></i> Upload font file
                                    </button>
                                    <input type="file" class="themeModFontFile" accept=".ttf,.otf,.woff,.woff2" style="display: none;">
                                </div>

                            </div>

                            <div class="themeModFontStatus" style="display: none;"></div>

                            <div class="themeModFontList"></div>

                            <div class="themeModLocalNote">
                                <i class="fas fa-circle-info"></i>
                                <span>Uploaded fonts are saved only in this browser on this computer. Nobody else sees them, and nothing is sent to FlockMod. They aren't included in share codes, and clearing your browser's data for FlockMod removes them.</span>
                            </div>


                            <div class="themeModSetting themeModNoDivider">

                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">
                                        UI Font Size
                                    </div>

                                    <div class="themeModSettingDescription">
                                        Adjust the size used by the FlockMod interface.
                                    </div>
                                </div>

                                <div class="themeModRangeControl">
                                    <input
                                        type="range"
                                        id="themeModUIFontSize"
                                        class="themeModRange"
                                        min="90"
                                        max="110"
                                        step="1"
                                        value="100"
                                    >

                                    <span
                                        id="themeModUIFontSizeValue"
                                        class="themeModRangeValue"
                                    >
                                        100%
                                    </span>
                                </div>

                            </div>

                            <div class="themeModSetting themeModNoDivider">

                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">
                                        UI Font Weight
                                    </div>

                                    <div class="themeModSettingDescription">
                                        Choose the weight used by the FlockMod interface.
                                    </div>
                                </div>

                                <select id="themeModUIFontWeight" class="themeModSelect">
                                    <option value="regular">Regular</option>
                                    <option value="medium">Medium</option>
                                    <option value="semibold">Semibold</option>
                                    <option value="bold">Bold</option>
                                </select>

                            </div>

                            <div class="themeModSubsectionTitle themeModSpacingSubsection">
    Spacing
</div>

<div class="themeModSetting">

    <div class="themeModSettingText">
        <div class="themeModSettingName">
            UI Spacing
        </div>

        <div class="themeModSettingDescription">
            Adjust the spacing and density of the FlockMod interface.
        </div>
    </div>

    <div class="themeModRangeControl">
        <input
            type="range"
            id="themeModUISpacing"
            class="themeModRange"
            min="75"
            max="125"
            step="1"
            value="100"
        >

        <span
            id="themeModUISpacingValue"
            class="themeModRangeValue"
        >
            100%
        </span>
    </div>

</div>

<div class="themeModSetting themeModNoDivider">

    <div class="themeModSettingText">
        <div class="themeModSettingName">
            Border Radius
        </div>

        <div class="themeModSettingDescription">
            Rounds the corners of buttons, text boxes, sliders, section boxes, layers and menus. 5 = FlockMod's own shapes.
        </div>
    </div>

    <div class="themeModRangeControl">
        <input
            type="range"
            id="themeModUIRadius"
            class="themeModRange"
            min="0"
            max="12"
            step="1"
            value="5"
        >

        <span
            id="themeModUIRadiusValue"
            class="themeModRangeValue"
        >
            Default
        </span>
    </div>

</div>

<div class="themeModSubsectionTitle themeModSpacingSubsection">
    Slider Thumbs
</div>

<div class="themeModSetting themeModNoDivider">

    <div class="themeModSettingText">
        <div class="themeModSettingName">
            Custom Thumb Shape
        </div>

        <div class="themeModSettingDescription">
            Turns the draggable slider and switch thumbs into a shape (circle, heart, star, diamond, flower, cat, dog, fish). OFF keeps normal thumbs (which Border Radius rounds).
        </div>
    </div>

    <label class="themeModToggle" style="margin-right: 10px;">
        <input type="checkbox" id="themeModThumbShapeEnabled">
        <span class="themeModToggleTrack">
            <span class="themeModToggleOption themeModToggleOff">OFF</span>
            <span class="themeModToggleOption themeModToggleOn">ON</span>
            <span class="themeModToggleThumb"></span>
        </span>
    </label>

    <select id="themeModThumbShape" class="themeModSelect themeModThumbSelect">
        ${buildThumbShapeOptionsHTML()}
    </select>

    <span class="themeModThumbPreview" title="Preview"></span>

</div>

<div class="themeModSetting themeModNoDivider">

    <div class="themeModSettingText">
        <div class="themeModSettingName">
            Shape Size
        </div>

        <div class="themeModSettingDescription">
            Makes shaped thumbs bigger so numbers fit better. Only used while a shape is on.
        </div>
    </div>

    <div class="themeModRangeControl">
        <input type="range" id="themeModThumbShapeSize" class="themeModRange" min="100" max="150" step="5" value="100">
        <span id="themeModThumbShapeSizeValue" class="themeModRangeValue">100%</span>
    </div>

</div>

        </div>

                        <div
                            class="themeModSectionContent"
                            data-theme-panel="colors"
                        >

    <div class="themeModSimpleColors">

        <div class="themeModSubsectionTitle">
            Simple Colors
        </div>

        ${buildSimpleColorRowsHTML()}

    </div>

    <div class="themeModDetailedColors">

    <div class="themeModLocalNote">
        <i class="fas fa-circle-info"></i>
        <span>Some colors have a Gradient option. It only shows while that color is ON, and only in detailed mode (Simple coloring turns gradients off). Sidebar gradients stretch across the whole sidebar instead of restarting in each section. A background image sits on top of the gradient and covers it (the gradient only shows through see-through parts of the image), and sidebar sections drop their gradient while the sidebar image is see-through, so the image still shows through them. Slider fills and switches use Accent 1's gradient too.</span>
    </div>

    <div class="themeModSubsectionTitle">
        General
    </div>

    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                Text Color 1
            </div>

            <div class="themeModSettingDescription">
                Override primary heading-style text (section titles, "Special thanks," native headings).
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="themeModText1ColorEnabled">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="themeModUIText1Color" value="#ffffff">

    </div>

    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                Text Color 2
            </div>

            <div class="themeModSettingDescription">
                Override most other text (tool options, popups and menus, text boxes, checkbox labels). Excludes the top bar brand title, chat messages, and user list names.
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="themeModText2ColorEnabled">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="themeModUIText2Color" value="#ffffff">

    </div>

    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                Selected Colors
            </div>

            <div class="themeModSettingDescription">
                Selected states (layer, tool, user row, pagination, pressed popup buttons). OFF = native selected look.
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="themeModSelectedColorEnabled">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="themeModUISelectedColor" value="#4f5156">

    </div>

    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                Hover Colors
            </div>

            <div class="themeModSettingDescription">
                Hover states across FlockMod, including popup buttons, menus and chat channels. OFF = native hovers.
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="themeModHoverColorEnabled">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="themeModUIHoverColor" value="#4f5156">

    </div>

        <div class="themeModSubsectionTitle themeModSpacingSubsection">
        Sidebar
    </div>

    ${buildSidebarColorRowsHTML()}

    <div class="themeModSubsectionTitle themeModSpacingSubsection">
        Top Bar
    </div>

        ${buildTopBarColorRowsHTML()}

    <div class="themeModSubsectionTitle themeModSpacingSubsection">
        Bottom Bar
    </div>

    ${buildBottomBarColorRowsHTML()}

    <div class="themeModSubsectionTitle themeModSpacingSubsection">
        Popups &amp; Menus
    </div>

    ${buildSidebarColorRowsHTML(POPUP_COLOR_SETTINGS)}

    <div class="themeModSubsectionTitle themeModSpacingSubsection">
        Chat
    </div>

    ${buildSidebarColorRowsHTML(CHAT_COLOR_SETTINGS)}

    </div><!-- closes themeModDetailedColors -->

</div>

                        <div class="themeModSectionContent" data-theme-panel="themes">

                            <div class="themeModThemeStatus" style="display: none;"></div>

                            <div class="themeModUndoRow" style="display: none;">
                                <span>Changed your mind about the last theme you loaded?</span>
                                <button type="button" class="themeModButton themeModUndoButton">Undo</button>
                            </div>

                            <div class="themeModSubsectionTitle">
                                Share
                            </div>

                            <div class="themeModSetting themeModNoDivider">
                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">Export theme</div>
                                    <div class="themeModSettingDescription">
                                        Copies a code of your applied look (colors, fonts, spacing) to share with friends.
                                    </div>
                                </div>
                                <button type="button" class="themeModButton themeModExportButton">Copy code</button>
                            </div>

                            <textarea class="themeModCodeBox themeModExportCode" readonly style="display: none;"></textarea>

                            <div class="themeModSetting themeModNoDivider">
                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">Import theme</div>
                                    <div class="themeModSettingDescription">
                                        Paste a theme code below. It replaces your current look (you can undo it).
                                    </div>
                                </div>
                                <button type="button" class="themeModButton themeModImportButton">Import</button>
                            </div>

                            <textarea class="themeModCodeBox themeModImportCode" placeholder="FMTHEME1:..." spellcheck="false"></textarea>

                            <div class="themeModSubsectionTitle themeModSpacingSubsection">
                                My Themes
                            </div>

                            <div class="themeModSetting themeModNoDivider">
                                <div class="themeModSettingText">
                                    <div class="themeModSettingName">Save current theme</div>
                                    <div class="themeModSettingDescription">
                                        Saving with an existing name updates that theme.
                                    </div>
                                </div>
                                <div class="themeModSaveRow">
                                    <input type="text" class="themeModTextInput themeModSaveName" placeholder="Theme name" maxlength="40" spellcheck="false">
                                    <button type="button" class="themeModButton themeModSaveButton">Save</button>
                                </div>
                            </div>

                            <div class="themeModSavedList"></div>

                            <div class="themeModSubsectionTitle themeModSpacingSubsection">
                                Presets
                            </div>

                            <div class="themeModSettingDescription themeModPresetNote">
                                Presets use simple coloring, so your detailed colors and Interface settings stay as they are.
                            </div>

                            <div class="themeModPresetGrid">
                                ${buildPresetCardsHTML()}
                            </div>

                        </div>

${buildAnimationsPanelHTML()}

                        <div class="themeModSectionContent" data-theme-panel="backgrounds">

                            <div class="themeModLocalNote">
                                <i class="fas fa-circle-info"></i>
                                <span>Background images are saved only in this browser on this computer. Nobody else sees them, and nothing is sent to FlockMod. They aren't included in share codes, and clearing your browser's data for FlockMod removes them.</span>
                            </div>

                            ${buildBackgroundRowsHTML()}

                        </div>

                        </div><!-- closes themeModSectionsScroll -->

                    </div><!-- closes themeModPanel -->

                    <div class="themeModActions">

                        <!-- Only shown in Colors while simple mode is on (see CSS) -->
                        <button type="button" class="themeModCopyToDetailed" title="Turn your simple colors into detailed ones, so you can fine-tune them">
                            <i class="fas fa-layer-group"></i> Copy to detailed
                        </button>

                        <span class="themeModActionsNote"></span>

                        <button type="button" class="themeModResetButton">
                            Reset
                        </button>

                        <button type="button" class="themeModApplyButton">
                            Apply Changes
                        </button>

                    </div>

                    </div><!-- closes themeModMainColumn -->

                </div><!-- closes themeModContent -->

            </div>

            <div class="dialogSize dsBar sbTop"></div>
            <div class="dialogSize dsBar sbBottom"></div>
            <div class="dialogSize dsBar sbLeft"></div>
            <div class="dialogSize dsBar sbRight"></div>

            <div class="dialogSize dsCorner sbTopLeft"></div>
            <div class="dialogSize dsCorner sbTopRight"></div>
            <div class="dialogSize dsCorner sbBottomLeft"></div>
            <div class="dialogSize dsCorner sbBottomRight"></div>
        `;

        const dialogContainer =
            document.querySelector("#dialogContainer");

        if (!dialogContainer) {
            return null;
        }

        /* No backdrop anymore: the rest of FlockMod stays clickable
           while the menu is open, so you can open popups/chat and
           see your colors live. (The close code still removes any
           old .themeModBackdrop, which is harmless.) */
        dialogContainer.appendChild(dialog);

        setupDragging(dialog);
        setupResizing(dialog);
        setupCloseButton(dialog);
        setupSidebarNavigation(dialog);
        setupJumpNavAndSearch(dialog);
        setupThemesPanel(dialog);
        setupBackgroundsPanel(dialog);
        setupThumbShape(dialog);

        const enabledToggle =
            dialog.querySelector("#themeModEnabled");

        const savedState =
            localStorage.getItem(
                "flockmodCustomizationsEnabled"
            );

        if (savedState !== null) {
            customizationsEnabled =
                savedState === "true";
        }

        enabledToggle.checked =
            customizationsEnabled;

        enabledToggle.addEventListener("change", () => {
            customizationsEnabled =
                enabledToggle.checked;

            localStorage.setItem(
                "flockmodCustomizationsEnabled",
                customizationsEnabled
            );

            document.documentElement.classList.toggle(
                "flockmodCustomizationsDisabled",
                !customizationsEnabled
            );

            if (customizationsEnabled) {
                applySavedFont();
                applySavedFontSize();
                applySavedFontWeight();
                applySavedSpacing();
            } else {
                document.documentElement.style.removeProperty(
                    "--flockmod-custom-ui-font"
                );

                document.documentElement.style.removeProperty(
                    "--flockmod-custom-ui-font-size"
                );

                document.documentElement.style.removeProperty(
                    "--flockmod-custom-ui-font-weight"
                );

                document.documentElement.style.removeProperty(
                    "--flockmod-ui-spacing"
                );
            }
        });

        const fontSelect =
            dialog.querySelector("#themeModUIFont");

        const savedFont =
            localStorage.getItem("flockmodCustomUIFont") ||
            "default";

        fontSelect.innerHTML =
            buildFontOptionsHTML(savedFont);

        fontSelect.value =
            isValidFontValue(savedFont) ? savedFont : "default";

        if (customizationsEnabled) {
            applyFontValue(savedFont);
        }

        setupCustomFonts(dialog, fontSelect);

        const fontSizeSlider =
            dialog.querySelector("#themeModUIFontSize");

        const fontSizeValue =
            dialog.querySelector("#themeModUIFontSizeValue");

        const savedFontSize =
            localStorage.getItem(
                "flockmodCustomUIFontSize"
            ) || "100";

        fontSizeSlider.value =
            savedFontSize;

        fontSizeValue.textContent =
            `${savedFontSize}%`;

        if (customizationsEnabled) {
            applyFontSizePreview(
                savedFontSize
            );
        }

        const fontWeightSelect =
            dialog.querySelector("#themeModUIFontWeight");

        const savedFontWeight =
            localStorage.getItem(
                "flockmodCustomUIFontWeight"
            ) || "regular";

        fontWeightSelect.value =
            savedFontWeight;

        if (customizationsEnabled) {
            applyFontWeightPreview(
                savedFontWeight
            );
        }

        const spacingSlider =
            dialog.querySelector("#themeModUISpacing");

        const spacingValue =
            dialog.querySelector("#themeModUISpacingValue");

        const savedSpacing =
            localStorage.getItem(
                "flockmodCustomUISpacing"
            ) || "100";

        spacingSlider.value =
            savedSpacing;

        spacingValue.textContent =
            `${savedSpacing}%`;

        if (customizationsEnabled) {
            applySpacingPreview(
                savedSpacing
            );
        }

        const radiusSlider =
            dialog.querySelector("#themeModUIRadius");

        const radiusValue =
            dialog.querySelector("#themeModUIRadiusValue");

        const savedRadius =
             localStorage.getItem(
                "flockmodCustomUIRadius"
        ) || "5";

radiusSlider.value =
    savedRadius;

radiusValue.textContent =
    radiusLabel(savedRadius);

if (customizationsEnabled) {
    applyRadiusPreview(
        savedRadius
    );
}

const selectedColorInput =
    dialog.querySelector("#themeModUISelectedColor");

const savedSelectedColor =
    localStorage.getItem("flockmodCustomSelectedColor") || "#4f5156";

selectedColorInput.value = savedSelectedColor;

if (customizationsEnabled) {
    applySelectedColorPreview(savedSelectedColor);
}

selectedColorInput.addEventListener("input", () => {
    applySelectedColorPreview(selectedColorInput.value);
});

const hoverColorInput =
    dialog.querySelector("#themeModUIHoverColor");

const savedHoverColor =
    localStorage.getItem("flockmodCustomHoverColor") || "#4f5156";

hoverColorInput.value = savedHoverColor;

if (customizationsEnabled) {
    applyHoverColorPreview(savedHoverColor);
}

hoverColorInput.addEventListener("input", () => {
    applyHoverColorPreview(hoverColorInput.value);
});

const selectedColorEnabledToggle =
    dialog.querySelector("#themeModSelectedColorEnabled");

const hoverColorEnabledToggle =
    dialog.querySelector("#themeModHoverColorEnabled");

selectedColorEnabledToggle.checked =
    isSavedOnByDefault("flockmodCustomSelectedColorEnabled");

hoverColorEnabledToggle.checked =
    isSavedOnByDefault("flockmodCustomHoverColorEnabled");

applySelectedEnabledPreview(selectedColorEnabledToggle.checked);
applyHoverEnabledPreview(hoverColorEnabledToggle.checked);

selectedColorEnabledToggle.addEventListener("change", () => {
    applySelectedEnabledPreview(selectedColorEnabledToggle.checked);
});

hoverColorEnabledToggle.addEventListener("change", () => {
    applyHoverEnabledPreview(hoverColorEnabledToggle.checked);
});

const text1ColorEnabledToggle =
    dialog.querySelector("#themeModText1ColorEnabled");

const text1ColorInput =
    dialog.querySelector("#themeModUIText1Color");

const savedText1Enabled =
    localStorage.getItem("flockmodCustomText1ColorEnabled") === "true";

const savedText1Color =
    localStorage.getItem("flockmodCustomText1Color") || "#ffffff";

text1ColorEnabledToggle.checked = savedText1Enabled;
text1ColorInput.value = savedText1Color;

if (customizationsEnabled) {
    applyText1ColorEnabledPreview(savedText1Enabled);
    applyText1ColorPreview(savedText1Color);
}

text1ColorEnabledToggle.addEventListener("change", () => {
    applyText1ColorEnabledPreview(text1ColorEnabledToggle.checked);
});

text1ColorInput.addEventListener("input", () => {
    applyText1ColorPreview(text1ColorInput.value);
});

const text2ColorEnabledToggle =
    dialog.querySelector("#themeModText2ColorEnabled");

const text2ColorInput =
    dialog.querySelector("#themeModUIText2Color");

const savedText2Enabled =
    localStorage.getItem("flockmodCustomText2ColorEnabled") === "true";

const savedText2Color =
    localStorage.getItem("flockmodCustomText2Color") || "#ffffff";

text2ColorEnabledToggle.checked = savedText2Enabled;
text2ColorInput.value = savedText2Color;

if (customizationsEnabled) {
    applyText2ColorEnabledPreview(savedText2Enabled);
    applyText2ColorPreview(savedText2Color);
}

text2ColorEnabledToggle.addEventListener("change", () => {
    applyText2ColorEnabledPreview(text2ColorEnabledToggle.checked);
});

text2ColorInput.addEventListener("input", () => {
    applyText2ColorPreview(text2ColorInput.value);
});

const topBarColorControls = BAR_COLOR_SETTINGS.map((setting) => {
    const toggle = dialog.querySelector(`#${setting.toggleId}`);
    const input = dialog.querySelector(`#${setting.inputId}`);
    const saved = getSavedTopBarColor(setting);

    toggle.checked = saved.enabled;
    input.value = saved.color;

    if (customizationsEnabled) {
        applyTopBarColorPreview(setting, saved.enabled, saved.color);
    }

    toggle.addEventListener("change", () => {
        applyTopBarColorPreview(setting, toggle.checked, input.value);
    });

    input.addEventListener("input", () => {
        applyTopBarColorPreview(setting, toggle.checked, input.value);
    });

    return { setting, toggle, input };
});

const sidebarColorControls = TOGGLE_COLOR_SETTINGS.map((setting) => {
    const toggle = dialog.querySelector(`#${setting.toggleId}`);
    const input = dialog.querySelector(`#${setting.inputId}`);
    const saved = getSavedSidebarColor(setting);

    toggle.checked = saved.enabled;
    input.value = saved.color;

    if (customizationsEnabled) {
        applySidebarColorPreview(setting, saved.enabled, saved.color);
    }

    toggle.addEventListener("change", () => {
        applySidebarColorPreview(setting, toggle.checked, input.value);
    });

    input.addEventListener("input", () => {
        applySidebarColorPreview(setting, toggle.checked, input.value);
    });

    return { setting, toggle, input };
});

/* ---------- Simple coloring wiring ---------- */

const simpleModeToggle =
    dialog.querySelector("#themeModSimpleMode");

const simpleColorControls = SIMPLE_COLOR_SETTINGS.map((setting) => {
    const toggle = dialog.querySelector(`#${setting.toggleId}`);
    const input = dialog.querySelector(`#${setting.inputId}`);
    const saved = getSavedSimpleValues()[setting.key];

    toggle.checked = saved.enabled;
    input.value = saved.color;

    return { setting, toggle, input };
});

function getSimpleValuesFromInputs() {
    const values = {};

    simpleColorControls.forEach(({ setting, toggle, input }) => {
        values[setting.key] = {
            enabled: toggle.checked,
            color: input.value
        };
    });

    return values;
}

/* Re-previews the detailed colors from what's currently in
   their pickers (used when leaving simple mode). */
function previewDetailedFromInputs() {
    applySelectedEnabledPreview(selectedColorEnabledToggle.checked);
    applyHoverEnabledPreview(hoverColorEnabledToggle.checked);
    applySelectedColorPreview(selectedColorInput.value);
    applyHoverColorPreview(hoverColorInput.value);
    applyText1ColorEnabledPreview(text1ColorEnabledToggle.checked);
    applyText1ColorPreview(text1ColorInput.value);
    applyText2ColorEnabledPreview(text2ColorEnabledToggle.checked);
    applyText2ColorPreview(text2ColorInput.value);

    topBarColorControls.forEach(({ setting, toggle, input }) => {
        applyTopBarColorPreview(setting, toggle.checked, input.value);
    });

    sidebarColorControls.forEach(({ setting, toggle, input }) => {
        applySidebarColorPreview(setting, toggle.checked, input.value);
    });
}

function refreshColorPreview() {
    if (simpleModeToggle.checked) {
        applySimpleColors(getSimpleValuesFromInputs());
    } else {
        previewDetailedFromInputs();
    }
}

simpleModeToggle.checked = isSimpleModeSaved();
dialog.classList.toggle("themeModSimpleMode", simpleModeToggle.checked);

if (customizationsEnabled && simpleModeToggle.checked) {
    applySimpleColors(getSimpleValuesFromInputs());
}

/* Like "Enable customizations", this toggle saves right away */
simpleModeToggle.addEventListener("change", () => {
    localStorage.setItem(SIMPLE_MODE_LS, simpleModeToggle.checked);
    dialog.classList.toggle("themeModSimpleMode", simpleModeToggle.checked);
    refreshColorPreview();
});

simpleColorControls.forEach(({ toggle, input }) => {
    toggle.addEventListener("change", refreshColorPreview);
    input.addEventListener("input", refreshColorPreview);
});

/* Gradient rows (under some detailed colors) */
const gradientControls = setupGradientControls(dialog);

/* Animations tab (bloom switch + swatch pulse live in here too) */
const animationControls = setupAnimationsPanel(dialog);

        fontSelect.addEventListener("change", () => {
            applyFontValue(fontSelect.value);
        });

        fontSizeSlider.addEventListener("input", () => {
            const selectedSize =
                Number(fontSizeSlider.value);

            fontSizeValue.textContent =
                `${selectedSize}%`;

            applyFontSizePreview(
                selectedSize
            );
        });

        fontWeightSelect.addEventListener("change", () => {
            applyFontWeightPreview(
                fontWeightSelect.value
            );
        });

        spacingSlider.addEventListener("input", () => {
            const selectedSpacing =
                Number(spacingSlider.value);

            spacingValue.textContent =
                `${selectedSpacing}%`;

            applySpacingPreview(
                selectedSpacing
            );
        });

        radiusSlider.addEventListener("input", () => {
            const selectedRadius =
                Number(radiusSlider.value);

            radiusValue.textContent =
                radiusLabel(selectedRadius);

            applyRadiusPreview(
                selectedRadius
            );
        });

        const applyButton =
            dialog.querySelector(
                ".themeModApplyButton"
            );

        const resetButton =
            dialog.querySelector(
                ".themeModResetButton"
            );

        applyButton.addEventListener("click", () => {

            localStorage.setItem(
                "flockmodCustomUIFont",
                fontSelect.value
            );

            localStorage.setItem(
                "flockmodCustomUIFontSize",
                fontSizeSlider.value
            );

            localStorage.setItem(
                "flockmodCustomUIFontWeight",
                fontWeightSelect.value
            );

            localStorage.setItem(
                "flockmodCustomUISpacing",
                spacingSlider.value
            );

            localStorage.setItem(
                "flockmodCustomUIRadius",
                radiusSlider.value
            );

            localStorage.setItem(
                "flockmodCustomSelectedColor",
                selectedColorInput.value
            );

            localStorage.setItem(
                "flockmodCustomHoverColor",
                hoverColorInput.value
            );

            localStorage.setItem(
                "flockmodCustomSelectedColorEnabled",
                selectedColorEnabledToggle.checked
            );

            localStorage.setItem(
                "flockmodCustomHoverColorEnabled",
                hoverColorEnabledToggle.checked
            );

            localStorage.setItem(
                "flockmodCustomText1ColorEnabled",
                text1ColorEnabledToggle.checked
            );

            localStorage.setItem(
                "flockmodCustomText1Color",
                text1ColorInput.value
            );

            localStorage.setItem(
                "flockmodCustomText2ColorEnabled",
                text2ColorEnabledToggle.checked
            );

            localStorage.setItem(
                "flockmodCustomText2Color",
                text2ColorInput.value
            );

            topBarColorControls.forEach(({ setting, toggle, input }) => {
    localStorage.setItem(setting.lsEnabled, toggle.checked);
    localStorage.setItem(setting.lsColor, input.value);
});

                        sidebarColorControls.forEach(({ setting, toggle, input }) => {
                localStorage.setItem(setting.lsEnabled, toggle.checked);
                localStorage.setItem(setting.lsColor, input.value);
            });

            simpleColorControls.forEach(({ setting, toggle, input }) => {
                localStorage.setItem(setting.lsEnabled, toggle.checked);
                localStorage.setItem(setting.lsColor, input.value);
            });

            gradientControls.save();
            animationControls.save();
        });

        /* ---------- Copy to detailed ----------
           Fills every detailed picker with what simple mode is
           currently showing, switches to detailed mode and applies,
           so the theme looks exactly the same but is now fully
           editable. Your previous detailed colors are backed up
           (Undo in the Themes tab). */
        const copyToDetailedButton =
            dialog.querySelector(".themeModCopyToDetailed");

        const actionsNote =
            dialog.querySelector(".themeModActionsNote");

        copyToDetailedButton.addEventListener("click", () => {
            const targets = {};

            applySimpleColors(getSimpleValuesFromInputs(), (cls, cssVar, enabled, color) => {
                targets[cls] = { enabled, color };
            });

            saveThemeUndo();

            [...topBarColorControls, ...sidebarColorControls].forEach(({ setting, toggle, input }) => {
                const target = targets[setting.cls];

                if (target) {
                    toggle.checked = target.enabled;
                    input.value = target.color;
                }
            });

            const pairs = [
                ["flockmodText1ColorActive", text1ColorEnabledToggle, text1ColorInput],
                ["flockmodText2ColorActive", text2ColorEnabledToggle, text2ColorInput],
                ["flockmodSelectedColorActive", selectedColorEnabledToggle, selectedColorInput],
                ["flockmodHoverColorActive", hoverColorEnabledToggle, hoverColorInput]
            ];

            pairs.forEach(([cls, toggle, input]) => {
                const target = targets[cls];

                if (target) {
                    toggle.checked = target.enabled;
                    input.value = target.color;
                }
            });

            /* Switch to detailed (saves the mode, swaps the rows,
               re-previews and rebuilds the jump chips) ... */
            simpleModeToggle.checked = false;
            simpleModeToggle.dispatchEvent(new Event("change"));

            /* ... and save it all */
            applyButton.click();

            actionsNote.textContent = "Copied! Undo is in the Themes tab.";
            actionsNote.classList.add("visible");

            clearTimeout(actionsNote._timer);
            actionsNote._timer = setTimeout(() => {
                actionsNote.classList.remove("visible");
            }, 4000);
        });

        resetButton.addEventListener("click", () => {

            fontSelect.value =
                "default";

            document.documentElement.style.removeProperty(
                "--flockmod-custom-ui-font"
            );

            fontSizeSlider.value =
                "100";

            fontSizeValue.textContent =
                "100%";

            applyFontSizePreview(
                "100"
            );

            fontWeightSelect.value =
                "regular";

            applyFontWeightPreview(
                "regular"
            );

            spacingSlider.value =
                "100";

            spacingValue.textContent =
                "100%";

            applySpacingPreview(
                "100"
            );

            radiusSlider.value =
                "5";

            radiusValue.textContent =
                radiusLabel(5);

            applyRadiusPreview(
                "5"
            );

            localStorage.setItem(
                "flockmodCustomUIFont",
                "default"
            );

            localStorage.setItem(
                "flockmodCustomUIFontSize",
                "100"
            );

            localStorage.setItem(
                "flockmodCustomUIFontWeight",
                "regular"
            );

            localStorage.setItem(
                "flockmodCustomUISpacing",
                "100"
            );

            localStorage.setItem(
                "flockmodCustomUIRadius",
                "5"
            );

            animationControls.reset();

            /* Reset only clears the colors of the mode you are in, so
               your detailed theme survives a reset in simple mode. */
            if (!simpleModeToggle.checked) {
            selectedColorInput.value =
                "#4f5156";

            applySelectedColorPreview(
                "#4f5156"
            );

            localStorage.setItem(
                "flockmodCustomSelectedColor",
                "#4f5156"
            );

            hoverColorInput.value =
                "#4f5156";

            applyHoverColorPreview(
                "#4f5156"
            );

            localStorage.setItem(
                "flockmodCustomHoverColor",
                "#4f5156"
            );

            /* Default for these two is ON (how they always behaved) */
            selectedColorEnabledToggle.checked = true;
            hoverColorEnabledToggle.checked = true;
            applySelectedEnabledPreview(true);
            applyHoverEnabledPreview(true);
            localStorage.setItem("flockmodCustomSelectedColorEnabled", "true");
            localStorage.setItem("flockmodCustomHoverColorEnabled", "true");

            text1ColorEnabledToggle.checked =
                false;

            applyText1ColorEnabledPreview(
                false
            );

            localStorage.setItem(
                "flockmodCustomText1ColorEnabled",
                "false"
            );

            text1ColorInput.value =
                "#ffffff";

            applyText1ColorPreview(
                "#ffffff"
            );

            localStorage.setItem(
                "flockmodCustomText1Color",
                "#ffffff"
            );

            text2ColorEnabledToggle.checked =
                false;

            applyText2ColorEnabledPreview(
                false
            );

            localStorage.setItem(
                "flockmodCustomText2ColorEnabled",
                "false"
            );

            text2ColorInput.value =
                "#ffffff";

            applyText2ColorPreview(
                "#ffffff"
            );

            localStorage.setItem(
                "flockmodCustomText2Color",
                "#ffffff"
            );

            topBarColorControls.forEach(({ setting, toggle, input }) => {
    toggle.checked = false;
    input.value = setting.defaultColor;

    applyTopBarColorPreview(setting, false, setting.defaultColor);

    localStorage.setItem(setting.lsEnabled, "false");
    localStorage.setItem(setting.lsColor, setting.defaultColor);
});


                        sidebarColorControls.forEach(({ setting, toggle, input }) => {
                toggle.checked = false;
                input.value = setting.defaultColor;

                applySidebarColorPreview(setting, false, setting.defaultColor);

                localStorage.setItem(setting.lsEnabled, "false");
                localStorage.setItem(setting.lsColor, setting.defaultColor);
            });

            gradientControls.reset();
            } else {
            /* Simple mode: only the simple colors reset, detailed stay untouched */
            simpleColorControls.forEach(({ setting, toggle, input }) => {
                toggle.checked = false;
                input.value = setting.defaultColor;

                localStorage.setItem(setting.lsEnabled, "false");
                localStorage.setItem(setting.lsColor, setting.defaultColor);
            });
            }

            /* Simple mode on/off is kept; this just re-previews
               whichever mode is active with the reset values. */
            refreshColorPreview();
        });

        return dialog;
    }

    function setupDragging(dialog) {
        const titleBar =
            dialog.querySelector(
                ".dialogTitlebar"
            );

        let dragging = false;
        let startX = 0;
        let startY = 0;
        let startLeft = 0;
        let startTop = 0;

        titleBar.addEventListener(
            "pointerdown",
            (event) => {

                if (
                    event.target.closest(
                        ".closeButton"
                    )
                ) {
                    return;
                }

                dragging = true;

                startX =
                    event.clientX;

                startY =
                    event.clientY;

                startLeft =
                    dialog.offsetLeft;

                startTop =
                    dialog.offsetTop;

                titleBar.setPointerCapture(
                    event.pointerId
                );
            }
        );

        titleBar.addEventListener(
            "pointermove",
            (event) => {

                if (!dragging) {
                    return;
                }

                const dx =
                    event.clientX -
                    startX;

                const dy =
                    event.clientY -
                    startY;

                let newLeft =
                    startLeft + dx;

                let newTop =
                    startTop + dy;

                const screenWidth =
                    window.innerWidth;

                const screenHeight =
                    window.innerHeight;

                const dialogWidth =
                    dialog.offsetWidth;

                const dialogHeight =
                    dialog.offsetHeight;

                const minLeft =
                    0;

                const maxLeft =
                    screenWidth -
                    dialogWidth;

                const minTop =
                    0;

                const maxTop =
                    screenHeight -
                    dialogHeight;

                newLeft =
                    Math.max(
                        minLeft,
                        Math.min(
                            newLeft,
                            maxLeft
                        )
                    );

                newTop =
                    Math.max(
                        minTop,
                        Math.min(
                            newTop,
                            maxTop
                        )
                    );

                dialog.style.left =
                    `${newLeft}px`;

                dialog.style.top =
                    `${newTop}px`;
            }
        );

        titleBar.addEventListener(
            "pointerup",
            () => {
                dragging = false;
            }
        );

        titleBar.addEventListener(
            "pointercancel",
            () => {
                dragging = false;
            }
        );
    }

    function setupResizing(dialog) {
        const minWidth = 400;
        const minHeight = 300;

        function setupHandle(
            handle,
            direction
        ) {
            let resizing = false;

            let startX;
            let startY;
            let startWidth;
            let startHeight;
            let startLeft;
            let startTop;

            handle.addEventListener(
                "pointerdown",
                (event) => {

                    event.preventDefault();

                    resizing = true;

                    startX =
                        event.clientX;

                    startY =
                        event.clientY;

                    startWidth =
                        dialog.offsetWidth;

                    startHeight =
                        dialog.offsetHeight;

                    startLeft =
                        dialog.offsetLeft;

                    startTop =
                        dialog.offsetTop;

                    handle.setPointerCapture(
                        event.pointerId
                    );
                }
            );

            handle.addEventListener(
                "pointermove",
                (event) => {

                    if (!resizing) {
                        return;
                    }

                    const dx =
                        event.clientX -
                        startX;

                    const dy =
                        event.clientY -
                        startY;

                    let width =
                        startWidth;

                    let height =
                        startHeight;

                    let left =
                        startLeft;

                    let top =
                        startTop;

                    if (
                        direction.includes(
                            "right"
                        )
                    ) {
                        width =
                            Math.max(
                                minWidth,
                                startWidth +
                                dx
                            );
                    }

                    if (
                        direction.includes(
                            "left"
                        )
                    ) {
                        width =
                            Math.max(
                                minWidth,
                                startWidth -
                                dx
                            );

                        if (
                            width >
                            minWidth
                        ) {
                            left =
                                startLeft +
                                dx;
                        } else {
                            left =
                                startLeft +
                                (
                                    startWidth -
                                    minWidth
                                );
                        }
                    }

                    if (
                        direction.includes(
                            "bottom"
                        )
                    ) {
                        height =
                            Math.max(
                                minHeight,
                                startHeight +
                                dy
                            );
                    }

                    if (
                        direction.includes(
                            "top"
                        )
                    ) {
                        height =
                            Math.max(
                                minHeight,
                                startHeight -
                                dy
                            );

                        if (
                            height >
                            minHeight
                        ) {
                            top =
                                startTop +
                                dy;
                        } else {
                            top =
                                startTop +
                                (
                                    startHeight -
                                    minHeight
                                );
                        }
                    }

                    dialog.style.width =
                        `${width}px`;

                    dialog.style.height =
                        `${height}px`;

                    if (
                        direction.includes(
                            "left"
                        )
                    ) {
                        dialog.style.left =
                            `${left}px`;
                    }

                    if (
                        direction.includes(
                            "top"
                        )
                    ) {
                        dialog.style.top =
                            `${top}px`;
                    }
                }
            );

            handle.addEventListener(
                "pointerup",
                () => {
                    resizing = false;
                }
            );

            handle.addEventListener(
                "pointercancel",
                () => {
                    resizing = false;
                }
            );
        }

        setupHandle(
            dialog.querySelector(".sbTop"),
            "top"
        );

        setupHandle(
            dialog.querySelector(".sbBottom"),
            "bottom"
        );

        setupHandle(
            dialog.querySelector(".sbLeft"),
            "left"
        );

        setupHandle(
            dialog.querySelector(".sbRight"),
            "right"
        );

        setupHandle(
            dialog.querySelector(".sbTopLeft"),
            "top left"
        );

        setupHandle(
            dialog.querySelector(".sbTopRight"),
            "top right"
        );

        setupHandle(
            dialog.querySelector(".sbBottomLeft"),
            "bottom left"
        );

        setupHandle(
            dialog.querySelector(".sbBottomRight"),
            "bottom right"
        );
    }

    function setupCloseButton(dialog) {
        const closeButton =
            dialog.querySelector(
                ".closeButton"
            );

        closeButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                const savedFont =
                    localStorage.getItem(
                        "flockmodCustomUIFont"
                    ) || "default";

                const savedFontSize =
                    localStorage.getItem(
                        "flockmodCustomUIFontSize"
                    ) || "100";

                const savedFontWeight =
                    localStorage.getItem(
                        "flockmodCustomUIFontWeight"
                    ) || "regular";

                const savedSpacing =
                    localStorage.getItem(
                        "flockmodCustomUISpacing"
                    ) || "100";
                    
                    const savedRadius =
                    localStorage.getItem(
                        "flockmodCustomUIRadius"
                    ) || "5";
            
                applyFontValue(savedFont);

                applyFontSizePreview(
                    savedFontSize
                );

                applyFontWeightPreview(
                    savedFontWeight
                );

                applySpacingPreview(
                    savedSpacing
                );

                const backdrop =
                    document.querySelector(
                        ".themeModBackdrop"
                    );

                if (backdrop) {
                    backdrop.remove();
                }

                applyRadiusPreview(
                    savedRadius
                );

                const savedSelected2 =
                    localStorage.getItem(
                        "flockmodCustomSelectedColor"
                    ) || "#4f5156";

                applySelectedColorPreview(
                    savedSelected2
                );

                const savedHover2 =
                    localStorage.getItem(
                        "flockmodCustomHoverColor"
                    ) || "#4f5156";

                applyHoverColorPreview(
                    savedHover2
                );

                applySelectedEnabledPreview(
                    isSavedOnByDefault("flockmodCustomSelectedColorEnabled")
                );

                applyHoverEnabledPreview(
                    isSavedOnByDefault("flockmodCustomHoverColorEnabled")
                );

                const savedText1Enabled2 =
                    localStorage.getItem(
                        "flockmodCustomText1ColorEnabled"
                    ) === "true";

                const savedText1Color2 =
                    localStorage.getItem(
                        "flockmodCustomText1Color"
                    ) || "#ffffff";

                applyText1ColorEnabledPreview(
                    savedText1Enabled2
                );

                applyText1ColorPreview(
                    savedText1Color2
                );

                const savedText2Enabled2 =
                    localStorage.getItem(
                        "flockmodCustomText2ColorEnabled"
                    ) === "true";

                const savedText2Color2 =
                    localStorage.getItem(
                        "flockmodCustomText2Color"
                    ) || "#ffffff";

                applyText2ColorEnabledPreview(
                    savedText2Enabled2
                );

                applyText2ColorPreview(
                    savedText2Color2
                );

                BAR_COLOR_SETTINGS.forEach((setting) => {
    const saved = getSavedTopBarColor(setting);
    applyTopBarColorPreview(setting, saved.enabled, saved.color);
});

                    TOGGLE_COLOR_SETTINGS.forEach((setting) => {
                    const saved = getSavedSidebarColor(setting);

                    applySidebarColorPreview(
                        setting,
                        saved.enabled,
                        saved.color
                    );
                });

                /* Simple mode (if saved on) sits on top of the detailed colors */
                applySavedSimpleColorsIfActive();
                applySavedGradients();
                applySavedAnimations();
                rememberMenuRect(dialog);

                dialog.remove();
            }
        );
    }


    /* =========================================================
       JUMP CHIPS + SEARCH (in the section title row)
       Chips are built from whatever .themeModSubsectionTitle
       elements the open panel has, so new subsections show up
       automatically. Search looks through every panel.
       ========================================================= */

    function setupJumpNavAndSearch(dialog) {
        const scroller = dialog.querySelector(".themeModSectionsScroll");
        const jumpBar = dialog.querySelector(".themeModJumpBar");
        const search = dialog.querySelector(".themeModSearch");
        const searchInput = dialog.querySelector(".themeModSearchInput");
        const searchButton = dialog.querySelector(".themeModSearchButton");
        const sectionTitle = dialog.querySelector(".themeModSectionTitle");
        const actions = dialog.querySelector(".themeModActions");
        const panels = Array.from(dialog.querySelectorAll(".themeModSectionContent"));

        const noResults = document.createElement("div");
        noResults.className = "themeModNoResults";
        noResults.textContent = "No settings match your search.";
        scroller.appendChild(noResults);

        /* ---- Index each setting once: panel + subsection + name + description ---- */
        panels.forEach((panel) => {
            let currentTitle = null;

            panel.querySelectorAll(".themeModSubsectionTitle, .themeModSetting").forEach((el) => {
                if (el.classList.contains("themeModSubsectionTitle")) {
                    currentTitle = el;
                    return;
                }

                const text = el.querySelector(".themeModSettingText");

                el._themeModTitle = currentTitle;
                el.dataset.searchText = [
                    panel.dataset.themePanel,
                    currentTitle ? currentTitle.textContent : "",
                    text ? text.textContent : ""
                ].join(" ").replace(/\s+/g, " ").toLowerCase();
            });
        });

        /* ---- Jump chips ---- */
        let chipTargets = [];
        let spyQueued = false;

        function isSearching() {
            return dialog.classList.contains("themeModSearching");
        }

        function buildChips() {
            jumpBar.innerHTML = "";
            chipTargets = [];

            if (isSearching()) {
                jumpBar.style.display = "none";
                return;
            }

            const panel = panels.find((p) => getComputedStyle(p).display !== "none");

            const titles = panel
                ? Array.from(panel.querySelectorAll(".themeModSubsectionTitle"))
                    .filter((t) => t.offsetParent !== null)
                : [];

            /* One subsection or none: nothing to jump between */
            if (titles.length < 2) {
                jumpBar.style.display = "none";
                return;
            }

            jumpBar.style.display = "";

            titles.forEach((title) => {
                const chip = document.createElement("button");
                chip.type = "button";
                chip.className = "themeModJumpChip";
                chip.textContent = title.textContent.trim();

                chip.addEventListener("click", () => {
                    const top =
                        title.getBoundingClientRect().top -
                        scroller.getBoundingClientRect().top +
                        scroller.scrollTop - 4;

                    scroller.scrollTo({ top, behavior: "smooth" });
                });

                jumpBar.appendChild(chip);
                chipTargets.push({ chip, title });
            });

            updateActiveChip();
        }

        /* Highlights the chip of the subsection you're currently looking at */
        function updateActiveChip() {
            spyQueued = false;

            if (!chipTargets.length) {
                return;
            }

            const scrollerTop = scroller.getBoundingClientRect().top;
            const atBottom =
                scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2;

            let active = chipTargets[0];

            if (atBottom) {
                active = chipTargets[chipTargets.length - 1];
            } else {
                chipTargets.forEach((target) => {
                    if (target.title.getBoundingClientRect().top - scrollerTop <= 16) {
                        active = target;
                    }
                });
            }

            chipTargets.forEach((target) => {
                target.chip.classList.toggle("active", target === active);
            });

            /* Keep the active chip visible inside the chip row */
            const chip = active.chip;

            if (chip.offsetLeft < jumpBar.scrollLeft) {
                jumpBar.scrollLeft = chip.offsetLeft - 8;
            } else if (chip.offsetLeft + chip.offsetWidth > jumpBar.scrollLeft + jumpBar.clientWidth) {
                jumpBar.scrollLeft = chip.offsetLeft + chip.offsetWidth - jumpBar.clientWidth + 8;
            }
        }

        /* Throttled to one check per frame, so scrolling stays smooth */
        scroller.addEventListener("scroll", () => {
            if (!spyQueued) {
                spyQueued = true;
                requestAnimationFrame(updateActiveChip);
            }
        }, { passive: true });

        /* Mouse wheel scrolls the chip row sideways */
        jumpBar.addEventListener("wheel", (event) => {
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                jumpBar.scrollLeft += event.deltaY;
                event.preventDefault();
            }
        }, { passive: false });

        /* ---- Search ---- */
        let savedTitle = null;
        let savedActionsDisplay = null;

        function clearSearchMarks() {
            dialog.classList.remove("themeModSearching");
            dialog.querySelectorAll(".themeModSearchHidden").forEach((el) => {
                el.classList.remove("themeModSearchHidden");
            });
            panels.forEach((panel) => panel.classList.remove("themeModSearchEmpty"));
            noResults.style.display = "none";
        }

        function runSearch() {
            const query = searchInput.value.trim().toLowerCase();
            const wasSearching = isSearching();

            if (!query) {
                if (wasSearching) {
                    clearSearchMarks();
                    sectionTitle.textContent = savedTitle;
                    actions.style.display = savedActionsDisplay;
                    scroller.scrollTop = 0;
                }

                buildChips();
                return;
            }

            if (!wasSearching) {
                savedTitle = sectionTitle.textContent;
                savedActionsDisplay = actions.style.display;
            }

            dialog.classList.add("themeModSearching");

            let total = 0;

            panels.forEach((panel) => {
                const rows = panel.querySelectorAll(".themeModSetting");
                const titlesWithMatches = new Set();
                let panelCount = 0;

                rows.forEach((row) => {
                    const match = (row.dataset.searchText || "").includes(query);
                    row.classList.toggle("themeModSearchHidden", !match);
                });

                /* Count after hiding, skipping rows hidden by simple/detailed mode */
                rows.forEach((row) => {
                    if (!row.classList.contains("themeModSearchHidden") && row.offsetParent !== null) {
                        panelCount++;
                        if (row._themeModTitle) {
                            titlesWithMatches.add(row._themeModTitle);
                        }
                    }
                });

                panel.querySelectorAll(".themeModSubsectionTitle").forEach((title) => {
                    title.classList.toggle("themeModSearchHidden", !titlesWithMatches.has(title));
                });

                panel.classList.toggle("themeModSearchEmpty", panelCount === 0);
                total += panelCount;
            });

            noResults.style.display = total === 0 ? "block" : "none";
            sectionTitle.textContent = "Search";
            actions.style.display = "flex";
            scroller.scrollTop = 0;

            buildChips();
        }

        function openSearch() {
            search.classList.add("open");
            searchInput.focus();
        }

        function closeSearch() {
            searchInput.value = "";
            runSearch();
            search.classList.remove("open");
        }

        searchButton.addEventListener("click", () => {
            if (search.classList.contains("open") && !searchInput.value) {
                closeSearch();
            } else {
                openSearch();
            }
        });

        searchInput.addEventListener("input", runSearch);

        /* Escape arrives as a custom event from the keyboard shield
           (the real key event never reaches here, see setupKeyboardShield) */
        searchInput.addEventListener("themeModEscape", closeSearch);

        searchInput.addEventListener("blur", () => {
            if (!searchInput.value) {
                search.classList.remove("open");
            }
        });

        /* Clicking a sidebar section while searching: drop the search
           (the section's own title/actions were already set by the
           sidebar navigation, so don't restore the old ones). */
        dialog.querySelectorAll(".themeModSidebarItem").forEach((button) => {
            button.addEventListener("click", () => {
                if (isSearching() || searchInput.value) {
                    searchInput.value = "";
                    clearSearchMarks();
                    search.classList.remove("open");
                }

                dialog.dataset.section = button.dataset.themeSection;
                scroller.scrollTop = 0;
                requestAnimationFrame(buildChips);
            });
        });

        /* Simple mode shows different subsections, so rebuild */
        const simpleToggle = dialog.querySelector("#themeModSimpleMode");

        if (simpleToggle) {
            simpleToggle.addEventListener("change", () => {
                requestAnimationFrame(isSearching() ? runSearch : buildChips);
            });
        }

        buildChips();
    }

    function setupSidebarNavigation(dialog) {
        const sidebarButtons =
            dialog.querySelectorAll(
                ".themeModSidebarItem"
            );

        const sectionTitle =
            dialog.querySelector(
                ".themeModSectionTitle"
            );

        const sectionPanels =
            dialog.querySelectorAll(
                ".themeModSectionContent"
            );

        const actions =
            dialog.querySelector(
                ".themeModActions"
            );

        actions.style.display =
            "none";

        sidebarButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        sidebarButtons.forEach(
                            (item) => {
                                item.classList.remove(
                                    "active"
                                );
                            }
                        );

                        button.classList.add(
                            "active"
                        );

                        const sectionName =
                            button.dataset
                                .themeSection;

                        sectionTitle.textContent =
                            sectionName
                                .charAt(0)
                                .toUpperCase() +
                            sectionName.slice(1);

                        sectionPanels.forEach(
                            (panel) => {

                                if (
                                    panel.dataset
                                        .themePanel ===
                                    sectionName
                                ) {
                                    panel.style.display =
                                        "block";
                                } else {
                                    panel.style.display =
                                        "none";
                                }
                            }
                        );

                        if (
                            sectionName === "interface" ||
                            sectionName === "colors" ||
                            sectionName === "backgrounds" ||
                            sectionName === "animations"
                        ) {
                            actions.style.display =
                                "flex";
                        } else {
                            actions.style.display =
                                "none";
                        }
                    }
                );
            }
        );
    }

    function toggleModMenu() {
        const existingMenu =
            document.querySelector(
                MOD_DIALOG_SELECTOR
            );

        if (existingMenu) {
            /* Close it the same way the X button does, so unsaved
               previews are reverted and the backdrop is removed too
               (an invisible leftover backdrop would block the page). */
            const closeButton = existingMenu.querySelector(".closeButton");

            if (closeButton) {
                closeButton.click();
            } else {
                existingMenu.remove();
                document.querySelectorAll(".themeModBackdrop").forEach((el) => el.remove());
            }

            return;
        }

        createModMenu();
    }

    function loadSavedCustomizations() {
        const savedState =
            localStorage.getItem(
                "flockmodCustomizationsEnabled"
            );

        if (savedState !== null) {
            customizationsEnabled =
                savedState === "true";
        }

        document.documentElement.classList.toggle(
            "flockmodCustomizationsDisabled",
            !customizationsEnabled
        );

        applySavedFont();
        applySavedFontSize();
        applySavedFontWeight();
        applySavedSpacing();
        applySavedSelectedColor();
        applySavedHoverColor();
        applySavedText1Color();
        applySavedText2Color();
        applySavedTopBarColors();
        applySavedSidebarColors();
        applySavedSimpleColorsIfActive();
        applySavedGradients();
        applySavedAnimations();
        applySavedBackgrounds();
        applySavedThumbShape();

        /* Border radius was only applied when the menu opened — now on page load too */
        if (customizationsEnabled) {
            applyRadiusPreview(localStorage.getItem("flockmodCustomUIRadius") || "5");
        }
    }

    /* =========================================================
       KEYBOARD SHIELD
       FlockMod listens for hotkeys on the whole page (T = text
       tool, etc). This catches every key event that happens
       inside the mod menu first (capture phase on window, which
       runs before any document/element listener) and stops it
       from travelling any further, so FlockMod never sees it.
       Typing itself still works: stopping an event's propagation
       doesn't block the letter from being typed.
       ========================================================= */

    function setupKeyboardShield() {
        const shield = (event) => {
            const target = event.target;

            if (!(target instanceof Element) || !target.closest(MOD_DIALOG_SELECTOR)) {
                return;
            }

            /* Our own inputs still get Enter / Escape, as custom events */
            if (event.type === "keydown" && event.key === "Escape") {
                target.dispatchEvent(new CustomEvent("themeModEscape"));
            }

            if (event.type === "keydown" && event.key === "Enter" && target.matches("input")) {
                target.dispatchEvent(new CustomEvent("themeModEnter"));
            }

            event.stopImmediatePropagation();
        };

        ["keydown", "keypress", "keyup"].forEach((type) => {
            window.addEventListener(type, shield, true);
        });
    }

    function initialize() {
        setupKeyboardShield();
        loadSavedCustomizations();

        addModButton();

        setInterval(() => {
            addModButton();
            checkSeeThroughTargets();
            makeThumbRoom();     /* for sliders in popups opened later */
        }, 500);
    }

    initialize();
})();