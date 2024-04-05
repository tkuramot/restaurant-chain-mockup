require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.new(1, 'John', 'Doe', 'example@gmail.com',
                        'password', '1234567890', '1234 Elm St', 22.years.ago,
                        1.year.from_now, 'admin') }

  describe 'has_membership_expired?' do
    context 'membership expiration date is in the future' do
      it 'returns false' do
        user.renew_membership(1.month.from_now)
        expect(user.has_membership_expired?).to eq(false)
      end
    end
    context 'membership expiration date is in the past' do
      it 'returns true' do
        user.renew_membership(1.month.ago)
        expect(user.has_membership_expired?).to eq(true)
      end
    end
  end
end
