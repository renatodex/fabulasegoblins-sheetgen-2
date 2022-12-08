# == Schema Information
#
# Table name: initial_items
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  offered_item_id :bigint           not null
#
# Indexes
#
#  index_initial_items_on_offered_item_id  (offered_item_id)
#
# Foreign Keys
#
#  fk_rails_...  (offered_item_id => items.id)
#
class InitialItem < ApplicationRecord
  belongs_to :offered_item
end
