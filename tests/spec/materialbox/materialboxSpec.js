describe( 'Materialbox:', function() {
  var transformMaterialbox;

  beforeEach(async function() {
    await XloadFixtures(['materialbox/materialboxFixture.html']);
  });
  afterEach(function(){
    XunloadFixtures();
  });

  describe('Materialbox opens correctly with transformed ancestor', function() {
    it('Opens a correctly placed overlay when clicked', function(done) {
      transformMaterialbox = $('#transformTest');
      $('.materialboxed').materialbox();

      // Mouse click
      transformMaterialbox.find('.materialboxed').trigger('click');
      setTimeout(function() {
        // Check overlay is attached
        var overlay = transformMaterialbox.find('#materialbox-overlay');
        var overlayRect = overlay[0].getBoundingClientRect();
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        expect(overlay).toExist('because it is generated on init'); //TODO replace with alternative for deprecated jasmine-jquery
        expect(overlay).toBeVisible('because materialbox was clicked'); //TODO replace with alternative for deprecated jasmine-jquery
        expect(overlayRect.top).toEqual(0);
        expect(overlayRect.left).toEqual(0);
        expect(overlayRect.width).toEqual(windowWidth);
        expect(overlayRect.height).toEqual(windowHeight);

        done();
      }, 1000);
    });
  });

});
