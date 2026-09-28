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
            description: "Main sidebar background."
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
            name: "Accent Color",
            description: "Sidebar border, slider fills, and switch on-states."
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
        SIDEBAR_COLOR_SETTINGS.forEach((setting) => {
            const saved = getSavedSidebarColor(setting);

            applySidebarColorPreview(
                setting,
                customizationsEnabled ? saved.enabled : false,
                saved.color
            );
        });
    }

    function buildSidebarColorRowsHTML() {
        return SIDEBAR_COLOR_SETTINGS.map((setting) => `
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
        `).join("");
    }

    function applyFontSizePreview(size) {
        const numericSize = Number(size);

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

    function applyRadiusPreview(radius) {
    const numericRadius = Number(radius);

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

    function applyTopBarTextColorEnabledPreview(enabled) {
        document.documentElement.classList.toggle(
            "flockmodTopBarTextColorActive",
            enabled
        );
    }

    function applyTopBarTextColorPreview(color) {
        document.documentElement.style.setProperty(
            "--flockmod-custom-topbar-text",
            color
        );
    }

    function applySavedFont() {
        const savedFont =
            localStorage.getItem("flockmodCustomUIFont") || "default";

        if (
            savedFont !== "default" &&
            customizationsEnabled
        ) {
            document.documentElement.style.setProperty(
                "--flockmod-custom-ui-font",
                `"${savedFont}", sans-serif`
            );
        } else {
            document.documentElement.style.removeProperty(
                "--flockmod-custom-ui-font"
            );
        }
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

        if (customizationsEnabled) {
            applySelectedColorPreview(savedSelected);
        }
    }

    function applySavedHoverColor() {
        const savedHover =
            localStorage.getItem("flockmodCustomHoverColor") || "#4f5156";

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

    function applySavedTopBarTextColor() {
        const savedEnabled =
            localStorage.getItem("flockmodCustomTopBarTextColorEnabled") === "true";

        const savedColor =
            localStorage.getItem("flockmodCustomTopBarTextColor") || "#ffffff";

        if (customizationsEnabled) {
            applyTopBarTextColorEnabledPreview(savedEnabled);
            applyTopBarTextColorPreview(savedColor);
        } else {
            applyTopBarTextColorEnabledPreview(false);
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

    function createModMenu() {
        if (document.querySelector(MOD_DIALOG_SELECTOR)) {
            return document.querySelector(MOD_DIALOG_SELECTOR);
        }

        const dialog = document.createElement("div");

        dialog.className = "dialog dialogVisible dialogFocus";
        dialog.setAttribute("name", "themeModMenu");

        Object.assign(dialog.style, {
            width: "500px",
            height: "350px",
            minWidth: "400px",
            minHeight: "300px",
            top: "150px",
            left: "250px"
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

                        <button class="themeModSidebarItem" data-theme-section="sidebar">
                            Sidebar
                        </button>

                        <button class="themeModSidebarItem" data-theme-section="animations">
                            Animations
                        </button>

                        <button class="themeModSidebarItem" data-theme-section="advanced">
                            Advanced
                        </button>

                        <div class="themeModSidebarFill"></div>

                    </div>

                    <div class="themeModMainColumn">

                    <div class="themeModPanel">

                        <div class="themeModSectionTitle">
                            General
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

                                <select id="themeModUIFont" class="themeModSelect">
                                    <option value="default">FlockMod default</option>
                                    <option value="Arial">Arial</option>
                                    <option value="Verdana">Verdana</option>
                                    <option value="Trebuchet MS">Trebuchet MS</option>
                                    <option value="Georgia">Georgia</option>
                                </select>

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
            Adjust the roundness of FlockMod interface elements.
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
            5px
        </span>
    </div>

</div>

        </div>

                        <div
                            class="themeModSectionContent"
                            data-theme-panel="colors"
                        >

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
                Override most other text (tool options, settings menus, checkbox labels). Excludes the top bar brand title, chat, and user list names.
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
                Color used for selected states (selected layer, selected tool, pagination).
            </div>
        </div>

        <input type="color" id="themeModUISelectedColor" value="#4f5156">

    </div>

    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                Hover Colors
            </div>

            <div class="themeModSettingDescription">
                Color used for hover states across FlockMod.
            </div>
        </div>

        <input type="color" id="themeModUIHoverColor" value="#4f5156">

    </div>

        <div class="themeModSubsectionTitle themeModSpacingSubsection">
        Sidebar
    </div>

    ${buildSidebarColorRowsHTML()}

    <div class="themeModSubsectionTitle themeModSpacingSubsection">
        Top Bar
    </div>

    <div class="themeModSetting themeModNoDivider">

        <div class="themeModSettingText">
            <div class="themeModSettingName">
                Text Color
            </div>

            <div class="themeModSettingDescription">
                Override the top bar icon buttons (Configuration, Chat, Fullscreen, Leave room).
            </div>
        </div>

        <label class="themeModToggle" style="margin-right: 10px;">
            <input type="checkbox" id="themeModTopBarTextColorEnabled">
            <span class="themeModToggleTrack">
                <span class="themeModToggleOption themeModToggleOff">OFF</span>
                <span class="themeModToggleOption themeModToggleOn">ON</span>
                <span class="themeModToggleThumb"></span>
            </span>
        </label>

        <input type="color" id="themeModUITopBarTextColor" value="#ffffff">

    </div>

</div>

                        </div><!-- closes themeModSectionsScroll -->

                    </div><!-- closes themeModPanel -->

                    <div class="themeModActions">

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

        const backdrop = document.createElement("div");
        backdrop.className = "themeModBackdrop";

        dialogContainer.appendChild(backdrop);
        dialogContainer.appendChild(dialog);

        setupDragging(dialog);
        setupResizing(dialog);
        setupCloseButton(dialog);
        setupSidebarNavigation(dialog);

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

        fontSelect.value =
            savedFont;

        if (
            savedFont !== "default" &&
            customizationsEnabled
        ) {
            document.documentElement.style.setProperty(
                "--flockmod-custom-ui-font",
                `"${savedFont}", sans-serif`
            );
        }

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
    `${savedRadius}px`;

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

const topBarTextColorEnabledToggle =
    dialog.querySelector("#themeModTopBarTextColorEnabled");

const topBarTextColorInput =
    dialog.querySelector("#themeModUITopBarTextColor");

const savedTopBarTextEnabled =
    localStorage.getItem("flockmodCustomTopBarTextColorEnabled") === "true";

const savedTopBarTextColor =
    localStorage.getItem("flockmodCustomTopBarTextColor") || "#ffffff";

topBarTextColorEnabledToggle.checked = savedTopBarTextEnabled;
topBarTextColorInput.value = savedTopBarTextColor;

if (customizationsEnabled) {
    applyTopBarTextColorEnabledPreview(savedTopBarTextEnabled);
    applyTopBarTextColorPreview(savedTopBarTextColor);
}

topBarTextColorEnabledToggle.addEventListener("change", () => {
    applyTopBarTextColorEnabledPreview(topBarTextColorEnabledToggle.checked);
});

topBarTextColorInput.addEventListener("input", () => {
    applyTopBarTextColorPreview(topBarTextColorInput.value);
});

const sidebarColorControls = SIDEBAR_COLOR_SETTINGS.map((setting) => {
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

        fontSelect.addEventListener("change", () => {
            const selectedFont =
                fontSelect.value;

            if (selectedFont === "default") {
                document.documentElement.style.removeProperty(
                    "--flockmod-custom-ui-font"
                );
            } else {
                document.documentElement.style.setProperty(
                    "--flockmod-custom-ui-font",
                    `"${selectedFont}", sans-serif`
                );
            }
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
                `${selectedRadius}px`;

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

            localStorage.setItem(
                "flockmodCustomTopBarTextColorEnabled",
                topBarTextColorEnabledToggle.checked
            );

            localStorage.setItem(
                "flockmodCustomTopBarTextColor",
                topBarTextColorInput.value
            );

                        sidebarColorControls.forEach(({ setting, toggle, input }) => {
                localStorage.setItem(setting.lsEnabled, toggle.checked);
                localStorage.setItem(setting.lsColor, input.value);
            });
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
                "5px";

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

            topBarTextColorEnabledToggle.checked =
                false;

            applyTopBarTextColorEnabledPreview(
                false
            );

            localStorage.setItem(
                "flockmodCustomTopBarTextColorEnabled",
                "false"
            );

            topBarTextColorInput.value =
                "#ffffff";

            applyTopBarTextColorPreview(
                "#ffffff"
            );

            localStorage.setItem(
                "flockmodCustomTopBarTextColor",
                "#ffffff"
            );

                        sidebarColorControls.forEach(({ setting, toggle, input }) => {
                toggle.checked = false;
                input.value = setting.defaultColor;

                applySidebarColorPreview(setting, false, setting.defaultColor);

                localStorage.setItem(setting.lsEnabled, "false");
                localStorage.setItem(setting.lsColor, setting.defaultColor);
            });
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
            
                if (
                    savedFont ===
                    "default"
                ) {
                    document.documentElement.style.removeProperty(
                        "--flockmod-custom-ui-font"
                    );
                } else {
                    document.documentElement.style.setProperty(
                        "--flockmod-custom-ui-font",
                        `"${savedFont}", sans-serif`
                    );
                }

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

                const savedTopBarTextEnabled2 =
                    localStorage.getItem(
                        "flockmodCustomTopBarTextColorEnabled"
                    ) === "true";

                const savedTopBarTextColor2 =
                    localStorage.getItem(
                        "flockmodCustomTopBarTextColor"
                    ) || "#ffffff";

                applyTopBarTextColorEnabledPreview(
                    savedTopBarTextEnabled2
                );

                applyTopBarTextColorPreview(
                    savedTopBarTextColor2
                );

                    SIDEBAR_COLOR_SETTINGS.forEach((setting) => {
                    const saved = getSavedSidebarColor(setting);

                    applySidebarColorPreview(
                        setting,
                        saved.enabled,
                        saved.color
                    );
                });

                dialog.remove();
            }
        );
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
                            sectionName === "colors"
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
            existingMenu.remove();
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
        applySavedTopBarTextColor();
        applySavedSidebarColors();
    }

    function initialize() {
        loadSavedCustomizations();

        addModButton();

        setInterval(
            addModButton,
            500
        );
    }

    initialize();
})();