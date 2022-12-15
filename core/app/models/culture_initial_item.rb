# == Schema Information
#
# Table name: culture_initial_items
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  culture_id      :bigint           not null
#  offered_item_id :bigint           not null
#
# Indexes
#
#  index_culture_initial_items_on_culture_id       (culture_id)
#  index_culture_initial_items_on_offered_item_id  (offered_item_id)
#
# Foreign Keys
#
#  fk_rails_...  (culture_id => cultures.id)
#  fk_rails_...  (offered_item_id => items.id)
#
class CultureInitialItem < ApplicationRecord
  belongs_to :culture
  belongs_to :item
end
