# == Schema Information
#
# Table name: culture_spells
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  culture_id :bigint           not null
#  spell_id   :bigint           not null
#
# Indexes
#
#  index_culture_spells_on_culture_id  (culture_id)
#  index_culture_spells_on_spell_id    (spell_id)
#
# Foreign Keys
#
#  fk_rails_...  (culture_id => cultures.id)
#  fk_rails_...  (spell_id => spells.id)
#
class CultureSpell < ApplicationRecord
  belongs_to :culture
  belongs_to :spell
end
