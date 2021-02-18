<?php

// @codingStandardsIgnoreFile

$base_sites = [
  'cms.eurofiber.com' => 'eurofiber',
];

global $sites;

foreach ($base_sites as $domain => $folder) {
  $sites[$domain] = $folder;

  /**
   * We also want to make it work with local development. For this, we need to
   * add .localhost after all domains.
   *
   * Unfortunately, Lando doesn't support multiple databases in the same service,
   * so for now we will always just redirect to the default site.
   */
  $sites[$domain . '.localhost'] = 'default';

  /**
   * A platform URL can look like this:
   * https://cms.example.com.master-XXXXXXX-XXXXXXXXXXXXX.eu-4.platformsh.site/
   *         ^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^ ^^^^^^^^^^^^^
   *
   * It contains different parts:
   *   1. Original domain
   *   2. Platform environment (PLATFORM_ENVIRONMENT)
   *   3. Platform project (PLATFORM_PROJECT)
   */
  if (!empty($_ENV['PLATFORM_ENVIRONMENT']) && !empty($_ENV['PLATFORM_PROJECT'])) {
    $sites[$domain . '.' . $_ENV['PLATFORM_ENVIRONMENT'] . '-' . $_ENV['PLATFORM_PROJECT'] . '.de-2.platformsh.site'] = $folder;
  }
}
