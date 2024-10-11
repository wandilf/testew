# App Teste


## Ambiente local

Este projeto suporta atualmente as seguintes versões de ambiente local.

> NODE:  v20.12.1.

>    Ionic Cli                     : 7.2.0 
   Ionic Framework               : @Ionic/Angular 8.3.2
   @Angular-Devkit/Build-Angular : 18.2.8
   @Angular-Devkit/Schematics    : 18.2.8
   @Angular/Cli                  : 18.2.8
   @Ionic/Angular-Toolkit        : 11.0.1

**> Capacitor:**

>    Capacitor Cli      : 6.1.2
   @Capacitor/Android : 6.1.2
   @Capacitor/Core    : 6.1.2

## Capacitor

Para gerar um app nativo Android, basta seguir os comandos abaixo e as personalizações na seguencia de alguns serviços como manda a documentação:

**Exemplo:**
```install
$ ionic build --prod
$ npx cap add android
$ npx cap copy
$ npx cap sync
```
https://github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/setup-google.md
https://github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/setup-facebook.md

# Comandos para rodar localmente

O projeto esta com login e autenticação funcional localmente, assim como toda integração junto ao Firestore e sincronizações relacionadas, abaixo os comandos para execução.

**Exemplo:**
```serve
$ npm i
$ ionic serve
```

## Objetivos

**1. Autenticação OAuth (Firebase - Facebook/Google):
**
*Funcional na versão Web do Ionic*


**2. Tela de Listagem de Post:
**
*Funcional no nativo Android e Web*

**3. Tela de Detalhes do Post:
**
*Funcional no nativo Android e Web*

**4. Integração com Firebase Firestore:
**
*Funcional na versão Web do Ionic*

**5. Notificações Push com Firebase Cloud Messaging (FCM):
**
*O item 5 não chegou a ser executado*

**6. Estrutura de Pastas e Organização de Código
**
*Seguido*

**7. Testes Automatizados
**
*O item 7 não chegou a ser executado*
