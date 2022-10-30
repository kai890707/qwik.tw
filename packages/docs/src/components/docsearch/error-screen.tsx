import { component$ } from '@builder.io/qwik';
import { ErrorIcon } from './icons/ErrorIcon';

export type ErrorScreenTranslations = Partial<{
  titleText: string;
  helpText: string;
}>;

type ErrorScreenProps = {
  translations?: ErrorScreenTranslations;
};

export const ErrorScreen = component$(({ translations = {} }: ErrorScreenProps) => {
  const {
    titleText = '無法取得結果',
    helpText = '或許可以檢查一下你的網路是否有連接',
  } = translations;
  return (
    <div className="DocSearch-ErrorScreen">
      <div className="DocSearch-Screen-Icon">
        <ErrorIcon />
      </div>
      <p className="DocSearch-Title">{titleText}</p>
      <p className="DocSearch-Help">{helpText}</p>
    </div>
  );
});
