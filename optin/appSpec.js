describe('optin', function(){
  beforeEach(module('myApp'));
  beforeEach(module('optin.html'));
  beforeEach(inject(function($rootScope, $compile){
    var brand = 'brand-logo'
    var html="";
    html += "<opt-in>";
    html += "<div class='"+brand+"'></div>";
    html += "</opt-in>";

    scope = $rootScope.$new();
    compiled = $compile(html)
    element = compiled(scope);
    scope.$digest();
  }));

  it('should render the element correctly', function(){
    expect(element.find('.left').text()).toContain('div');
  })
})
