import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store';
import {
  SettingsBox,
  SettingsOverlay,
  SettingsPrimaryText,
  SettingsSecondaryText,
  SettingsToggleBtn,
  SettingsWrapper,
  ThemeSwitcherBtn,
} from './styles';
import { IoSettingsOutline } from 'react-icons/io5';
import { Box } from '@/components';
import { themeModes } from './settings.constants';
import { TThemeMode } from '@/types';

export const Settings = () => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const { themeMode, setThemeMode } = useThemeStore();
  const { t } = useTranslation();

  const toggleSettingsVisibility = () => setIsSettingsVisible(!isSettingsVisible);

  const handleChangeTheme = (value: TThemeMode) => {
    setThemeMode(value);
  };

  return (
    <>
      <SettingsWrapper $hidden={!isSettingsVisible}>
        <Box $gap="4px" $direction="column" $mb="20px">
          <SettingsPrimaryText $align="center">TEMPLATE CUSTOMIZER</SettingsPrimaryText>

          <SettingsSecondaryText $fontSize="var(--sm)" $align="center">
            Set preferences that will be cookied for your live preview demonstration.
          </SettingsSecondaryText>
        </Box>

        <SettingsBox>
          <SettingsPrimaryText>Color Scheme</SettingsPrimaryText>

          <SettingsSecondaryText>Overall light or dark presentation.</SettingsSecondaryText>

          <Box $gap="8px" $mt="12px">
            {themeModes(t).map(({ name, icon, value }) => (
              <ThemeSwitcherBtn
                key={crypto.randomUUID()}
                type={value === themeMode ? 'primary' : 'default'}
                onClick={() => handleChangeTheme(value)}
              >
                {icon} {name}
              </ThemeSwitcherBtn>
            ))}
          </Box>
        </SettingsBox>

        <SettingsToggleBtn block={false} onClick={toggleSettingsVisibility}>
          <IoSettingsOutline />
        </SettingsToggleBtn>
      </SettingsWrapper>

      {isSettingsVisible && <SettingsOverlay onClick={toggleSettingsVisibility} />}
    </>
  );
};
