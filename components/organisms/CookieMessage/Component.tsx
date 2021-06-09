import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import * as styled from './styles';
import { useKlot } from '@i18n/translate';

enum CookieValue {
  OPTIMAL = 'optimal',
  RESTRICTED = 'restricted',
}

enum CookieStep {
  FIRST,
  SECOND,
}



export function CookieMessage() {
  const cookieName = 'default-cookie-title';
  const [cookies, setCookie] = useCookies([cookieName]);
  const [activeCookieOption, setActiveCookieOption] = useState<CookieValue>(
    cookies[cookieName],
  );
  const [cookieStep, setCookieStep] = useState<CookieStep>(CookieStep.FIRST);
  const router = useRouter();
  const t = useKlot();

  const submitCookie = (value: CookieValue = CookieValue.RESTRICTED) => {
    setCookie(cookieName, value, { path: '/' });
    router.push(router.asPath);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', (evt) =>
      trackGA(evt, cookies[cookieName]),
    );
    return () => {
      router.events.off('routeChangeComplete', (evt) =>
        trackGA(evt, cookies[cookieName]),
      );
    };
  }, [router.events, cookies]);

  if (cookies[cookieName]) {
    return null;
  }

  function CookieMessageContent() {
    return (
      <>
        <h4 className="cookie-message__title">{t('cookie-bar-title')}</h4>
        <small className="cookie-message__intro">
          {t('cookie-bar-message')}{' '}
          <a href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cookie-message__intro-link">
              {t('check-cookie-policy')}
            </a>
          </a>
        </small>
      </>
    );
  }

  return (
    <styled.CookieMessage>
      <div
        className={classNames({
          'cookie-message__content': true,
          'cookie-message__content--hidden': cookieStep !== CookieStep.FIRST,
        })}
      >
        {CookieMessageContent()}
        <div>
          <button
            className="cookie-message__step-button cookie-message__step-button--mobile-only"
            type="button"
            onClick={() => setCookieStep(CookieStep.SECOND)}
          >
            {t('check-cookie-options')}
          </button>
          <button
            type="submit"
            onClick={() => submitCookie(CookieValue.RESTRICTED)}
          >
            {t('accept-cookies')}
          </button>
          <button
            className="cookie-message__step-button cookie-message__step-button--tablet"
            type="button"
            onClick={() => setCookieStep(CookieStep.SECOND)}
          >
            {t('check-cookie-options')}
          </button>
        </div>
      </div>
      <div
        className={classNames({
          'cookie-message__content': true,
          'cookie-message__content--hidden': cookieStep !== CookieStep.SECOND,
        })}
      >
        {CookieMessageContent()}
        <form>
          <div>
            <input
              type="radio"
              className="cookie-message__radio"
              value={CookieValue.RESTRICTED}
              onChange={() => setActiveCookieOption(CookieValue.RESTRICTED)}
            />
            <small>
              <b>{t('cookie-bar-option-limited')}.</b> {t('cookie-bar-option-limited-description')}
            </small>
          </div>
          <div>
            <input
              type="radio"
              className="cookie-message__radio cookie-message__radio"
              value={CookieValue.OPTIMAL}
              onChange={() => setActiveCookieOption(CookieValue.OPTIMAL)}
            />
            <small>
              <b>{t('cookie-bar-option-optimal')}.</b> {t('cookie-bar-option-optimal-description')}
            </small>
          </div>
          <button
            type="submit"
            onClick={() => submitCookie(activeCookieOption)}
          >
            {t('accept-cookies')}
          </button>
        </form>
      </div>
    </styled.CookieMessage>
  );
}

function trackGA(page: any, action: CookieValue) {
  if (
    typeof window === 'object' &&
    window.dataLayer &&
    Array.isArray(window.dataLayer)
  ) {
    window.dataLayer.push({
      event: 'cookie_bar_opt_in',
      page,
      action,
    });
  }
}
