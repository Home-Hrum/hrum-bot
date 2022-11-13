const telegram = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    telegram.close();
  };

  const onToggleMainButton = () => {
    if (telegram.MainButton.isVisible) telegram.MainButton.hide();
    else telegram.MainButton.show();
  };

  const userData = telegram.initDataUnsafe;

  return {
    telegram,
    userData,
    onClose,
    onToggleMainButton,
  };
}
