<?php

define('CONFIG_SYNC_DIRECTORY', 'sync');

require __DIR__ . '/../../profiles/contrib/burst-drupal-distribution/includes/settings.php';


if (getenv('PLATFORM_RELATIONSHIPS')) {
  $relationships = json_decode(base64_decode(getenv('PLATFORM_RELATIONSHIPS')), TRUE);
  if (!empty($relationships) && isset($relationships['redis'])) {
    $settings['redis.connection']['interface'] = 'PhpRedis';
    $settings['redis.connection']['host'] = $relationships['redis'][0]['host'];
    $settings['redis.connection']['port'] = $relationships['redis'][0]['port'];
    $settings['cache']['default'] = 'cache.backend.redis';
    $settings['container_yamls'][] = 'modules/redis/example.services.yml';
  }
}

if (getenv('LANDO_INFO')) {
  $lando_info = json_decode(getenv('LANDO_INFO'), TRUE);

  $settings['redis.connection']['interface'] = 'PhpRedis';
  $settings['redis.connection']['host'] = $lando_info['cache']['internal_connection']['host'];
  $settings['redis.connection']['port'] = $lando_info['cache']['internal_connection']['port'];
  $settings['cache']['default'] = 'cache.backend.redis';
  $settings['container_yamls'][] = 'modules/redis/example.services.yml';
}

