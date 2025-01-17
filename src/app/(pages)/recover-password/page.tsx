import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'
import Link from 'next/link'
import Image from 'next/image'
import { RenderParams } from '../../_components/RenderParams'

import classes from './index.module.scss'

export default async function RecoverPassword() {
  return (
    <section className={classes.recover}>
      <div className={classes.heroImg}>
        <Link href='/'>
          <Image
            src='/logo-black.svg'
            alt="logo"
            width={250}
            height={23}
            className={classes.logo}
          />
        </Link>
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <RenderParams className={classes.params} />
          <Link href='/login' className={classes.backLink}>
            <Image
              src='/assets/icons/arrow-left.svg' alt='left arrow' width={24} height={24} />
            <p>Back</p>
          </Link>
        </div>
        <div className={classes.formTitle}>
          <h3>Forgot Password</h3>
          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
