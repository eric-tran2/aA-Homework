class GraphNode
    attr_reader :value, :surrounding
    attr_writer :value, :surrounding

    def initialize(value)
        self.value = value
        self.surrounding = []
    end

    def add_surrounding(node)
        self.surrounding << node
    end
end

def bfs(starting_node, target_value)
    queue = [starting_node]
    visited = Set.new()

    until queue.empty?
        node = queue.shift
        unless visited.include?(node)
            return nod.value if nod.value == target_value
            visited.add(node)
            queue += node.surrounding
        end
    end

    return nil
end