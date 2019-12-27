<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'code-with-js' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Ranosys@123' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}g&pDUEcqsDdZWp5{W+08gMr|{%D!Oo2%SYKtB:|QO[)72&Qx?}m`T9s[7DZ6l%3' );
define( 'SECURE_AUTH_KEY',  '~qYb6<n^R*zt[)!-</7i7`Nl1qOYEdr&ZJ@Qki#?Z5B `I>%2gP9}dxq7.H}S7#o' );
define( 'LOGGED_IN_KEY',    '0GLCFCt=8@-=`G8fS-GCZ^3ajdQ4ljNnrfx,{1v=@swS.dOso]$^GdUkA@(=8mSF' );
define( 'NONCE_KEY',        '*@+J!I3f7s^Ti,cywH]5E{/:GM)}e&d.HVE+pU!P^%^u&qBU0]K{n}b);6amK,rj' );
define( 'AUTH_SALT',        '}q=2>eO]OJnw4rwBFYI}<xA&!v7)isM$?zj$kj43b g`GP$0vDr~UuKi]k:nT;GK' );
define( 'SECURE_AUTH_SALT', 'S&+OR.s[2{@7Tf_VKF?2!H%sn+20 6Y]fL$K)V!fy-q6PeFZkRIy1N<kOv[k(48o' );
define( 'LOGGED_IN_SALT',   '.Ir!RD6,bh{Cp`${GBPqL_=q?}=(eL-h@a~5^3N`VI$v2|A@gDWnITQ>@t{7:x(<' );
define( 'NONCE_SALT',       'WHCL8Ob(c3t/)s|KK!I4L~>}$.drz5y;]m3N0B7w7j)jT !Wf!@tEd-:];8zGx?A' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
