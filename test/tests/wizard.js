/* @flow */

import { FSXC } from '../../src';

describe('button cases', () => {

    it('should render the component and log in', (done) => {

        let email = 'foo@bar.com';

        FSXC.render({

            env: 'test',

            prefilledEmail: email,

            onLogin(loginEmail : string) : void {

                if (loginEmail !== email) {
                    return done(new Error(`Expected ${ loginEmail } to be ${ email }`));
                }

                return done();
            }

        }, document.body);
    });
});
