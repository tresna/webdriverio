/**
 *
 * Make an engines that is available (appears on the list returned by getAvailableEngines) active.
 * After this call, the engine will be added to the list of engines loaded in the IME daemon and the
 * input sent using sendKeys will be converted by the active engine. Note that this is a
 * platform-independent method of activating IME (the platform-specific way being using keyboard shortcuts
 *
 * @param {String} engine   Name of the engine to activate.
 * @callbackParameter error, response
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/ime/activate
 * @type protocol
 *
 */

var ErrorHandler = require('../utils/ErrorHandler.js');

module.exports = function imeActivate (engine) {

    if(typeof engine !== 'string') {
        throw new ErrorHandler.ProtocolError('number or type of arguments don\'t agree with imeActivate protocol command');
    }

    return this.requestHandler.create(
        '/session/:sessionId/ime/activate',
        { engine: engine }
    );

};