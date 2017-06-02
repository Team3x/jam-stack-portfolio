require 'test_helper'

class Team3xControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get team3x_index_url
    assert_response :success
  end

end
