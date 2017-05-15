import {Callback, Context} from 'aws-lambda';

export function echoEventAndContext(event: any,
                                   context: Context,
                                   callback: Callback) {

    console.log('Event: ', JSON.stringify(event, null, 4));
    console.log('Context: ', JSON.stringify(context, null, 4));

    callback(undefined, event);
}
